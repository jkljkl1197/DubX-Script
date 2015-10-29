/* global emojify, Dubtrack, twitchObject */
var emoji = {

    // jQuery's getJSON kept returning errors so making my own
    getJSON : (function (url) {
        function gJ(_url, _cb){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', _url);
            xhr.send();
            xhr.onload = function() {
                var resp = JSON.parse(xhr.responseText);
                if (typeof _cb === 'function') { _cb(resp); }
            }
        }
        var done = function(cb){
            new gJ(url, cb);
        }
        return { done: done };
    }),
    let_twitch_emotes: true,
    emotes : emojify.emojiNames,
    twitch : { emotes : {} },
    initTwitch: function(){
        var self = this;
        // call apis and store data
        this.getJSON('//twitchemotes.com/api_cache/v2/global.json')
            .done(function(data){ 
                var key, keys = Object.keys(data.emotes);
                var n = keys.length;
                var newobj={};
                while (n--) {
                  key = keys[n];
                  self.twitch.emotes[key.toLowerCase()] = data.emotes[key];
                }
            });
        this.getJSON('//twitchemotes.com/api_cache/v2/subscriber.json')
            .done(function(data){ 
                console.log('2',data); 
            });
        this.getJSON('//api.betterttv.net/2/emotes')
            .done(function(data){ 
                console.log('3',data); 
            });
    }
};
emoji.initTwitch();



/**************************************************************************/

var emojiPreview = document.createElement('div');
emojiPreview.id = "emoji-preview";
emojiPreview.style.cssText = "display: none; border: 1px solid #202020; position: absolute; bottom: 54px; background-color:#111;";
$('.pusher-chat-widget-input').prepend(emojiPreview);

var emotes = emojify.emojiNames;
var GitHubLocation = 'https://rawgit.com/FranciscoG/DubX-Script/dev/js/';

$.getScript(GitHubLocation + 'twitchemotes.js', function(){
    emotes = emotes.concat(Object.keys(twitchObject.emotes));

    var re = new RegExp(":([+\\-_a-z0-9]+):","i");

    function makeImage(id, desc){
        return '<img class="emoji" title="'+desc+'" alt="'+desc+'" src="//static-cdn.jtvnw.net/emoticons/v1/'+id+'/1.0" />';
    }

    function replaceTextWithEmote(){
        var $last = $('.chat-main .text').last();
        var emoted = $last.html().replace(re, function(matched, p1){
            var key = p1.toLowerCase();
            if (typeof twitchObject.emotes[key] !== 'undefined'){
                return makeImage(twitchObject.emotes[key].image_id, twitchObject.emotes[key].description);
            }
        });
        $last.html(emoted);
    }

    Dubtrack.Events.bind("realtime:chat-message", replaceTextWithEmote);
});

var makePreviewContainer = function(cn){
    var d = document.createElement('div');
    d.style.display = "inline-block";
    d.className = cn;
    return d; 
}
var makeEmoImage = function(src) {
    var i = document.createElement('img');
    i.style.cssText = "width: 1em; height: 1em; display:inline-block";
    i.src = src;
    return i;
}
var makeNameSpan = function(name){
    var s = document.createElement('span');
    s.style.cssText = "font-size: 0.8em; display:inline-block; padding:0 3px;";
    s.textContent = name;
    return s;
}
function createTwitchImg(id, name) {
    var container = makePreviewContainer("twitch-previews");
    var img = makeEmoImage('//static-cdn.jtvnw.net/emoticons/v1/'+id+'/1.0');
    var span = makeNameSpan(name);
    container.appendChild(img);
    container.appendChild(span);
    return container;
}
function createImg(name) {
    var container = makePreviewContainer("emoji-previews");
    var img = makeEmoImage(emojify.defaultConfig.img_dir+'/'+encodeURI(name)+'.png');
    img.title = ':'+name+':'; img.alt = ':'+name+':';
    var span = makeNameSpan(name);
    container.appendChild(img);
    container.appendChild(span);
    return container;
}
function addToHelper(emojiArray) {
    $('#emoji-preview').empty();
    var text = "";
    var frag = document.createDocumentFragment();

    emojiArray.forEach(function(val,i,arr){
        if (typeof twitchObject.emotes[val.toLowerCase()] !== 'undefined') {
            frag.appendChild(createTwitchImg(twitchObject.emotes[val.toLowerCase()].image_id, val));
        } else {
            frag.appendChild(createImg(val));
        }
    });

    document.getElementById('emoji-preview').appendChild(frag);
    if ($(".twitch-previews").length) {
        $('#emoji-preview .twitch-previews').first().before('<p>Twitch emotes:</p>');
    }
    $('#emoji-preview').show();
}
function filterEmoji(str){
    var finalStr = str.replace("+","\\+");
    var re = new RegExp('^' + finalStr ,"i");
    return emotes.filter(function(val){
        return re.test(val);
    });
}
var searchStr = "";
var emojiRegex = new RegExp(":([+\\-_a-z0-9]+)$","i");
$(document.body).on('keyup', "#chat-txt-message", function(e) {
    var currentText = $('#chat-txt-message').val();

    var filteredEmoji = currentText.replace(emojiRegex, function(matched, p1){
        searchStr = p1;
        if (searchStr.length >= 2) {
            addToHelper(filterEmoji(p1));
        }
    });
    
    if (e.keyCode === 13 || searchStr.length <= 1 || currentText.charAt(currentText.length - 1) === ":") {
        searchStr = "";
        $('#emoji-preview').empty().hide();
    }
});