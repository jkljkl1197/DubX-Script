/* global emojify, Dubtrack */
$('.pusher-chat-widget-input').prepend('<div id="emoji-preview" style="display: none; border: 1px solid #202020; position: absolute; bottom: 54px; background-color:#111;"></div>');

function createImg(name) {
    return '<div style="display:inline-block">' +
        '<img style="width: 1em; height: 1em; display:inline-block" src="'+emojify.defaultConfig.img_dir+'/'+encodeURI(name)+'.png" title=":'+name+':" alt=":'+name+':" align="absmiddle" />' +
        '<span style="font-size: 0.8em; display:inline-block; padding-left: 3px;">:' + name + ':, </span>' +
    '</div>';
}
function addToHelper(emojiArray) {
    $('#emoji-preview').empty();
    var text = "";
    $.each(emojiArray, function(i,val){
        text += createImg(val);
    });
    $('#emoji-preview').append(text).show();
}
function filterEmoji(str){
    var finalStr = str.replace(/:;/g,"").replace("+","\\+");
    var re = new RegExp('^' + finalStr ,"ig");
    return emojify.emojiNames.filter(function(val){
        return re.test(val);
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
// Damn you browsers for implementing different keycodes.  
var isFF = /FireFox/ig.test(navigator.userAgent);
var keyMappings = {
    colon: (isFF) ? 59 : 186,
    plus: (isFF) ? 61 : 187,
    minus: (isFF) ? 173 : 189,
    backspace : 8
};
function isGoodKey(x, shiftKey){
    var regAlphaNum = x >= 48 && x <= 90;
    var numPad = x >= 96 && x <= 111;
    var hyphen = x === keyMappings.minus;
    var plusSign = x === keyMappings.plus && shiftKey;
    return regAlphaNum || numPad || hyphen || plusSign;
}
var emojiColon = false;
var searchStr = "";
$(document.body).on('keydown', "#chat-txt-message", function(e) {
    var colonKeyPressed = e.shiftKey && e.which === keyMappings.colon;
    var backSpaceKeyPressed = e.which === keyMappings.backspace;
    // console.log('key:', e.which, String.fromCharCode(e.which), 'shift:', e.shiftKey );
    
    if (!emojiColon && colonKeyPressed) { // first colon detected
        emojiColon = true;
    } else if (emojiColon && colonKeyPressed) { // closing colon detected
        emojiColon = false; 
        searchStr = "";
        $('#emoji-preview').empty().hide();
    }

    if (backSpaceKeyPressed && searchStr.length > 0) {
        searchStr = searchStr.substring(0, searchStr.length - 1);
        if (searchStr.length > 0) {  addToHelper(filterEmoji(searchStr)); }
    }

    if (backSpaceKeyPressed && searchStr.length === 0) {
        // backspace has erased all characters so we reset
        emojiColon = false;
        $('#emoji-preview').empty().hide();
    }
    
    if (emojiColon && isGoodKey(e.which, e.shiftKey) && e.which !== keyMappings.colon) {
        var fixCode = (e.which === keyMappings.plus) ? 43 : e.which; // get correct "+" charCode
        fixCode = (fixCode === keyMappings.minus) ? 45 : fixCode; // get correct "-" charCode
        searchStr += String.fromCharCode(fixCode);
        addToHelper(filterEmoji(searchStr));
    }
});
