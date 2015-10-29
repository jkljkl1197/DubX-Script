/* global emojify, Dubtrack, twitchObject */

var getJSON = (function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    var self = this;
    xhr.onload = function() {
        var resp = JSON.parse(xhr.responseText);
        if (typeof self.doneCB === 'function') { self.doneCB(resp); }
    }
    var done = function(cb){
        self.doneCB = cb;
    }
    return { done: done };
});

getJSON('//twitchemotes.com/api_cache/v2/global.json')
    .done(function(data){ 
        console.log(data); 
    });
getJSON('//twitchemotes.com/api_cache/v2/subscriber.json')
    .done(function(data){ 
        console.log(data); 
    });

/**************************************************************************/

$('.pusher-chat-widget-input').prepend('<div id="emoji-preview" style="display: none; border: 1px solid #202020; position: absolute; bottom: 54px; background-color:#111;"></div>');
var emotes = emojify.emojiNames;
var GitHubLocation = 'https://rawgit.com/FranciscoG/DubX-Script/dev/js/';
$.getScript(GitHubLocation + 'twitchemotes.js', function(){
    emotes = emotes.concat(Object.keys(twitchObject.emotes));

    var re = new RegExp(":(" + Object.keys(twitchObject.emotes).join("|") + "):" ,"ig"); 

    function makeImage(id){
        return '<img class="emoji" src="//static-cdn.jtvnw.net/emoticons/v1/'+id+'/1.0" />';
    }

    function replaceTextWithEmote(){
        var $last = $('.chat-main .text').last();
        var emoted = $last.html().replace(re, function(matched, p1){
            var key = p1.toLowerCase();
            if (typeof twitchObject.emotes[key] !== 'undefined'){
                return makeImage(twitchObject.emotes[key].image_id);
            }
        });
        $last.html(emoted);
    }

    Dubtrack.Events.bind("realtime:chat-message", replaceTextWithEmote);
});

function createTwitchImg(id, name) {
    return '<div style="display:inline-block" class="twitch-previews">' +
        '<img style="width: 1em; height: 1em; display:inline-block" src="//static-cdn.jtvnw.net/emoticons/v1/'+id+'/1.0" />' +
        '<span style="font-size: 0.8em; display:inline-block; padding:0 3px;">:' + name + ':</span>' +
    '</div>';
}
function createImg(name) {
    return '<div style="display:inline-block" class="emoji-previews">' +
        '<img style="width: 1em; height: 1em; display:inline-block" src="'+emojify.defaultConfig.img_dir+'/'+encodeURI(name)+'.png" title=":'+name+':" alt=":'+name+':" align="absmiddle" />' +
        '<span style="font-size: 0.8em; display:inline-block; padding:0 3px;">:' + name + ':</span>' +
    '</div>';
}
function addToHelper(emojiArray) {
    $('#emoji-preview').empty();
    var text = "";
    
    $.each(emojiArray, function(i,val){
        if (typeof twitchObject.emotes[val.toLowerCase()] !== 'undefined') {
            text += createTwitchImg(twitchObject.emotes[val.toLowerCase()].image_id, val);
        } else {
            text += createImg(val);
        }
    });

    $('#emoji-preview').append(text);
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