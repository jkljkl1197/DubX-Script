/* global emojify, Dubtrack, twitchObject */

var options = {
    let_twitch_emotes: false, // convert emotes in chat
    let_emoji_preview: false, // show emoji preview while typing
    let_twitch_emote_preview: false // show twitch emote preview while typing
};
var hello = {
    // stubbing so I don't get errors
    on: function(){},
    off: function(){},
    option: function(){},

    // jQuery's getJSON kept returning errors so making my own with promise-like
    // structure and added optional Event to fire when done so can hook in elsewhere
    getJSON : (function (url, optionalEvent) {
        var doneEvent;
        function GetJ(_url, _cb){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', _url);
            xhr.send();
            xhr.onload = function() {
                var resp = JSON.parse(xhr.responseText);
                if (typeof _cb === 'function') { _cb(resp); }
                document.dispatchEvent(doneEvent);
            };
        }
        if (optionalEvent){ doneEvent = new CustomEvent(optionalEvent); }
        var done = function(cb){
            new GetJ(url, cb);
        };
        return { done: done };
    }),

    twitch : { 
        template: "",
        emotes: {}
    },
    /**************************************************************************
     * Loads the twitch emotes from the api.  
     * API Source: twitchemotes.com
     */
    loadTwitchFromApi: function(){
        var self = this;

        // load Sub emotes first so that the global ones could override them
        this.getJSON('//twitchemotes.com/api_cache/v2/subscriber.json', 'emotes:subs:loaded')
            .done(function(data){ 
                self.twitch.template = data.template.small; // just in case global fails
                for (var channel in data.channels) {
                    for (var i in data.channels[channel]['emotes']) {
                        var emoteName = data.channels[channel]['emotes'][i].code;
                        self.twitch.emotes[emoteName.toLowerCase()] = {
                            "image_id" : data.channels[channel]['emotes'][i]["image_id"],
                            "description" : 'This is a Twitch emote from the subscriber channel: ' + data.channels[channel].title + ' @ ' + data.channels[channel].link
                        };
                    }
                }
            });
        
        document.addEventListener('emotes:subs:loaded', function(e) {
           // Get the global emojis second so that they could override the sub ones if duplicates
           self.getJSON('//twitchemotes.com/api_cache/v2/global.json', 'emotes:global:loaded')
               .done(function(data){ 
                   self.twitch.template = data.template.small;
                   var key, keys = Object.keys(data.emotes);
                   var n = keys.length;
                   var newobj={};
                   while (n--) {
                     key = keys[n];
                     self.twitch.emotes[key.toLowerCase()] = data.emotes[key];
                   }
               });
        });

        // create our giant array of both emoji and twitch names
        this.twitchJSONSLoaded = false;
        document.addEventListener('emotes:global:loaded', function(e) {
            self.twitchJSONSLoaded = true; // if at least one is loaded we can start using it
            // creating a combined array of emojis and the twitch emote names
            hello.emojiTwitch = emojify.emojiNames.concat(Object.keys(hello.twitch.emotes));
        });
    },
    /**************************************************************************
     * handles replacing twitch emotes in the chat box with the images
     */
    replaceTextWithEmote: function(){
        var self = hello;

        if (!self.twitchJSONSLoaded) { return; } // can't do anything until jsons are loaded
        function makeImage(src, desc){
            return '<img class="emoji" title="'+desc+'" alt="'+desc+'" src="'+src+'" />';
        }
        
        var inChatEmojiRegex = new RegExp(":([+\\-_A-Za-z0-9]+):","ig");
        var $last = $('.chat-main .text').last();
        var emoted = $last.html().replace(inChatEmojiRegex, function(matched, p1){
            var _id, _src, _desc, key = p1.toLowerCase();

            if (typeof self.twitch.emotes[key] !== 'undefined'){
                _id = self.twitch.emotes[key].image_id;
                _src = self.twitch.template.replace("{image_id}", _id);
                _desc = self.twitch.emotes[key].description;
                return makeImage(_src, _desc);
            } else {
                return matched;
            }
        });
        $last.html(emoted);
    },
    /**************************************************************************
     * Turn on/off the twitch emoji in chat
     */
    optionTwitchEmotes: function(){
        if (!options.let_twitch_emotes) {
            Dubtrack.Events.bind("realtime:chat-message", this.replaceTextWithEmote);
            options.let_twitch_emotes = true;
            hello.option('twitch_emotes', 'true');
            hello.on('.twitch_emotes');
        } else {
            Dubtrack.Events.unbind("realtime:chat-message", this.replaceTextWithEmote);
            options.let_twitch_emotes = false;
            hello.option('twitch_emotes', 'false');
            hello.off('.twitch_emotes');
        }
    },
    /**************************************************************************
     * A bunch of utility helpers for the emoji preview
     */
    emojiUtils : {
        makePreviewContainer : function(cn){
            var d = document.createElement('div');
            d.className = cn;
            return d; 
        },
        makeEmoImage : function(src) {
            var i = document.createElement('img');
            i.src = src;
            return i;
        },
        makeNameSpan : function(name){
            var s = document.createElement('span');
            s.textContent = name;
            return s;
        },
        createTwitchImg : function(id, name, desc) {
            var self = hello.emojiUtils;
            var _src = hello.twitch.template.replace("{image_id}", id);
            var container = self.makePreviewContainer("twitch-previews");
            var img = self.makeEmoImage(_src);
            img.title = desc;
            img.alt = desc;
            var span = self.makeNameSpan(name);
            container.appendChild(img);
            container.appendChild(span);
            return container;
        },
        createImg : function(name) {
            var self = hello.emojiUtils;
            var container = self.makePreviewContainer("emoji-previews");
            var img = self.makeEmoImage(emojify.defaultConfig.img_dir+'/'+encodeURI(name)+'.png');
            img.title = ':'+name+':'; 
            img.alt = ':'+name+':';
            var span = self.makeNameSpan(name);
            container.appendChild(img);
            container.appendChild(span);
            return container;
        },
        addToHelper : function(emojiArray) {
            var self = hello.emojiUtils;
            $('#emoji-preview').empty();
            var text = "";
            var frag = document.createDocumentFragment();
            var _key;

            emojiArray.forEach(function(val,i,arr){
                _key = val.toLowerCase();
                if (typeof hello.twitch.emotes[_key] !== 'undefined') {
                    frag.appendChild(self.createTwitchImg(hello.twitch.emotes[_key].image_id, val, hello.twitch.emotes[_key].description));
                } else {
                    frag.appendChild(self.createImg(val));
                }
            });

            document.getElementById('emoji-preview').appendChild(frag);
            $('#emoji-preview').show();
        },
        filterEmoji : function(str){
            var finalStr = str.replace("+","\\+");
            var re = new RegExp('^' + finalStr, "i");
            var arrayToUse = emojify.emojiNames;
            if (options.let_twitch_emote_preview) {
                arrayToUse = hello.emojiTwitch; // merged array
            }
            return arrayToUse.filter(function(val){
                return re.test(val);
            });
        },
        emojiSearchStr : ""
    },
    /**************************************************************************
     * This handles the emoji preview in the chat input as you type
     */
    optionTwitchEmotePreview: function(){
        if (!options.let_twitch_emote_preview) {
            options.let_twitch_emote_preview = true;
            hello.option('twitch_emote_preview', 'true');
            hello.on('.twitch_emote_preview');
        } else {
            options.let_twitch_emote_preview = false;
            hello.option('twitch_emote_preview', 'false');
            hello.off('.twitch_emote_preview');
        }
    },
    emojiKeyUpFunction: function(e){
        var self = hello.emojiUtils;
        var currentText = $('#chat-txt-message').val();
        var filteredEmoji = currentText.replace(/:([+\\-_a-z0-9]+)$/i, function(matched, p1){
            self.emojiSearchStr = p1;
            if (self.emojiSearchStr.length >= 3) { // change to set character limit
                self.addToHelper(self.filterEmoji(p1));
            }
        });
        
        if (e.keyCode === 13 || 
            self.emojiSearchStr.length <= 2 || // change to set character limit
            currentText.charAt(currentText.length - 1) === ":" || 
            currentText === "")
        {
            self.emojiSearchStr = "";
            $('#emoji-preview').empty().hide();
        }
    },
    optionEmojiPreview: function(){
        if (!$('#emoji-preview').length) {
            $('head').prepend('<link rel="stylesheet" type="text/css" href="https://rawgit.com/FranciscoG/DubX-Script/dev/css/options/emoji.css">');
            var emojiPreview = document.createElement('div');
            emojiPreview.id = "emoji-preview";
            $('.pusher-chat-widget-input').prepend(emojiPreview);
        }

        if (!options.let_emoji_preview) {
            $(document.body).on('keyup', "#chat-txt-message", this.emojiKeyUpFunction);
            options.let_emoji_preview = true;
            hello.option('emoji_preview', 'true');
            hello.on('.emoji_preview');
        } else {
            $(document.body).off('keyup', "#chat-txt-message", this.emojiKeyUpFunction);
            options.let_emoji_preview = false;
            hello.option('emoji_preview', 'false');
            hello.off('.emoji_preview');
        }
    }
};
hello.loadTwitchFromApi();

// check localStorage and run these if true.  
hello.optionTwitchEmotes();
hello.optionTwitchEmotePreview();
hello.optionEmojiPreview();