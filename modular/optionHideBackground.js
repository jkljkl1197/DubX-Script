//optionHideBackground.js
var isBackground = false;
function isBackgroundToggle() {
    var isOn
        if (!isBackground) {
            isBackground = true;
            isOn = "on";
            $('.backstretch').addClass('hideElement');
            $('.userCustomB').addClass('hideElement');
            localStorage.setItem('isBackground','true');
            $('.lY .isOnOff i').replaceWith('<i class="fi-check"></i>');
        } else {
            isBackground = false
            isOn = "off";
            $('.backstretch').removeClass('hideElement');
            $('.userCustomB').removeClass('hideElement');
            localStorage.setItem('isBackground','false');
            $('.lY .isOnOff i').replaceWith('<i class="fi-x"></i>');
        }
};

if (localStorage.getItem('isBackground') === 'true') {
    isBackgroundToggle();
};

$('.lY').click(isBackgroundToggle);
