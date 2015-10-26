(function emoji(){
    /* global emojify */
    $('.pusher-chat-widget-input').prepend('<div id="emoji-preview" style="display: none; border: 1px solid #202020; position: absolute; bottom: 54px"></div>');
    
    function createImg(name) {
        return [
            '<div style="display:inline-block">',
                '<img style="width: 1em; height: 1em; display:inline-block" src="'+emojify.defaultConfig.img_dir+'/'+name+'.png" title=":'+name+':" alt=":'+name+':" align="absmiddle" />',
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
        return emojify.emojiNames.filter(function(val){
            var re = new RegExp('^' + str.replace(":","") ,"ig");
            return re.test(val);
        });
    }
    function isGoodKey(x){
        // 48 - 90  =  0-9 A-Z || 96 - 111 = numpad || 189 = dash
        return (x >= 48 && x <= 90) || (x >= 96 && x <= 111) || x === 189;
    }
    var emojiColon = false;
    var searchStr = "";
    $("#chat-txt-message").keydown(function(e) {
        console.log('searchStr',searchStr);
        if (!emojiColon && e.shiftKey && e.which === 186) {
            emojiColon = true;
        } else if (emojiColon && e.shiftKey && e.which === 186) {
            emojiColon = false;
            searchStr = "";
            $('#emoji-preview').empty().hide();
        }

        if (e.which === 8 && searchStr.length > 0) {
            // backspace
            searchStr = searchStr.substring(0, searchStr.length - 1);
            addToHelper(filterEmoji(searchStr));
        }

        if (e.which === 8 && searchStr.length === 0) {
            // backspace has erased all characters so we reset
            emojiColon = false;
            $('#emoji-preview').empty().hide();
        }
        
        if (emojiColon && isGoodKey(e.which)) {
            searchStr += String.fromCharCode(e.which);
            addToHelper(filterEmoji(searchStr));
        }
    });
})();