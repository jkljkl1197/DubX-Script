//optionHideBackground.js
var isBackground = false;
function isBackgroundToggle() {
    var isOn
        if (!isBackground) {
            isBackground = true;
            isOn = "on";
            $('.backstretch').addClass('hideElement');
            $('.userCustomB').addClass('hideElement');
            $('.lY .isOnOff i').replaceWith('<i class="fi-check"></i>');
        } else {
            isBackground = false
            isOn = "off";
            $('.backstretch').removeClass('hideElement');
            $('.userCustomB').removeClass('hideElement');
            $('.lY .isOnOff i').replaceWith('<i class="fi-x"></i>');
        }
};			
$('.lY').click(isBackgroundToggle);
