(function emoji(){
    /* global emojify */
    $('.pusher-chat-widget-input').prepend('<div id="emoji-preview" style="display: none; border: 1px solid #202020; position: absolute; bottom: 54px; background-color:#111;"></div>');
    
    function createImg(name) {
        return [
            '<div style="display:inline-block">',
                '<img style="width: 1em; height: 1em; display:inline-block" src="'+emojify.defaultConfig.img_dir+'/'+encodeURI(name)+'.png" title=":'+name+':" alt=":'+name+':" align="absmiddle" />',
                '<span style="font-size: 0.8em; display:inline-block; padding-left: 3px;">:' + name + ':, </span>',
            '</div>'
        ].join('');
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
        var finalStr = str.replace(":","").replace("+","\\+");
        var re = new RegExp('^' + finalStr ,"ig");
        return emojify.emojiNames.filter(function(val){
            return re.test(val);
        });
    }
    function isGoodKey(x, shiftKey){
        // https://css-tricks.com/snippets/javascript/javascript-keycodes/
        var regAlphaNum = x >= 48 && x <= 90;
        var numPad = x >= 96 && x <= 111;
        var hyphen = x === 189;
        var plusSign = x === 187 && shiftKey;
        return regAlphaNum || numPad || hyphen || plusSign;
    }
    var emojiColon = false;
    var searchStr = "";
    $("#chat-txt-message").keydown(function(e) {
        var colonKey = e.shiftKey && e.which === 186;
        var backSpaceKey = e.which === 8;

        if (!emojiColon && colonKey) { // first colon detected
            emojiColon = true;
        } else if (emojiColon && colonKey) { // closing colon detected
            emojiColon = false; 
            searchStr = "";
            $('#emoji-preview').empty().hide();
        }

        if (backSpaceKey && searchStr.length > 0) {
            searchStr = searchStr.substring(0, searchStr.length - 1);
            addToHelper(filterEmoji(searchStr));
        }

        if (backSpaceKey && searchStr.length === 0) {
            // backspace has erased all characters so we reset
            emojiColon = false;
            $('#emoji-preview').empty().hide();
        }
        
        if (emojiColon && isGoodKey(e.which, e.shiftKey)) {
            var fixCode = (e.which === 187) ? 43 : e.which; // get correct "+" charCode
            fixCode = (fixCode === 189) ? 45 : fixCode; // get correct "-" charCode
            searchStr += String.fromCharCode(fixCode);
            addToHelper(filterEmoji(searchStr));
        }
    });
})();