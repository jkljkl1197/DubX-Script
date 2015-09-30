//optionChatWindow.js
var isChat = false;
function optionChat() {
    var isOn
        if (!isChat) {
            isChat = true
            isOn = "on";
            $('body').append('<style class="isChat">.left_section {display: none !important;}.right_section {width: 428.4px !important;margin: 0 auto !important;right: initial !important;position: relative !important;float: inherit !important;}</style>');
            $('.kY .isOption').replaceWith('<span class="isOption isOn">ON</span>');
        } else {
            isChat = false
            isOn = "off";
            $('.isChat').remove();
            $('.kY .isOption').replaceWith('<span class="isOption isOn">OFF</span>');
        }
};
$('.kY').click(optionChat);