//optionSplitChat.js
var isSplitChat = false;
function optionSplitChat() {
    var isOn
        if (!isSplitChat) {
            isSplitChat = true
            isOn = "on";
            $('body').append('<style class="splitChatClass">.chat-main li:nth-child(even){background:#181818;box-shadow:-8px 0px 0px 0px #181818;width:100%;}.chat-main li:nth-child(even) .ChatDelete{right: 1.5em !important;}</style>');
            $('.hY .isOnOff i').replaceWith('<i class="fi-check"></i>');
        } else {
            isSplitChat = false
            isOn = "off";
            $('.splitChatClass').remove();
            $('.hY .isOnOff i').replaceWith('<i class="fi-x"></i>');
        }
};
$('.hY').click(optionSplitChat);