//optionChatWindow.js
var isChat = false;
function optionChat() {
    var isOn
        if (!isChat) {
            isChat = true
            isOn = "on";
            $('body').append('<style class="isChat">.left_section {display: none !important;}.right_section {width: 428.4px !important;margin: 0 auto !important;right: initial !important;position: relative !important;float: inherit !important;}</style>');
            localStorage.setItem('isChat','true');
            $('.kY .isOnOff i').replaceWith('<i class="fi-check"></i>');
        } else {
            isChat = false
            isOn = "off";
            $('.isChat').remove();
            localStorage.setItem('isChat','false');
            $('.kY .isOnOff i').replaceWith('<i class="fi-x"></i>');
        }
};

if (localStorage.getItem('isChat') === 'true') {
    optionChat();
};

$('.kY').click(optionChat);
