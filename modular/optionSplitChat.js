//optionSplitChat.js
var isSplitChat = false;
function optionSplitChat() {
    var isOn
        if (!isSplitChat) {
            isSplitChat = true
            isOn = "on";
            $('body').append('<style class="splitChatClass">.chat-main li:nth-child(even){background:#181818;box-shadow:-8px 0px 0px 0px #181818;width:100%;}</style>');
            $('.hY .isOption').replaceWith('<span class="isOption isOn">ON</span>');
        } else {
            isSplitChat = false
            isOn = "off";
            $('.splitChatClass').remove();
            $('.hY .isOption').replaceWith('<span class="isOption isOn">OFF</span>');
        }
};
$('.hY').click(optionSplitChat);