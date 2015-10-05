//optionSplitChat.js
var isSplitChat = false;
function optionSplitChat() {
    var isOn
        if (!isSplitChat) {
            isSplitChat = true
            isOn = "on";
            $('body').append('<style class="splitChatClass">.chat-main li:nth-child(even){background:#181818;box-shadow:-8px 0px 0px 0px #181818;width:100%;}.chat-main li:nth-child(even) .chatDelete{right: 1.7em !important;}</style>');
            localStorage.setItem('isSplitChat','true');
            $('.hY .isOnOff i').replaceWith('<i class="fi-check"></i>');
        } else {
            isSplitChat = false
            isOn = "off";
            $('.splitChatClass').remove();
            localStorage.setItem('isSplitChat','false');
            $('.hY .isOnOff i').replaceWith('<i class="fi-x"></i>');
        }
};

if (localStorage.getItem('isSplitChat') === 'true') {
    optionSplitChat();
};

$('.hY').click(optionSplitChat);
