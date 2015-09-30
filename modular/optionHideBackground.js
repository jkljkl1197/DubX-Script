//optionHideBackground.js
var isBackground = false;
function isBackgroundToggle() {
    var isOn
        if (!isBackground) {
            isBackground = true
            isOn = "on";
            $('.backstretch').addClass('hideElement')
            $('.lY .isOption').replaceWith('<span class="isOption isOn">ON</span>');
        } else {
            isBackground = false
            isOn = "off";
            $('.backstretch').removeClass('hideElement');
            $('.lY .isOption').replaceWith('<span class="isOption isOn">OFF</span>');
        }
};			
$('.lY').click(isBackgroundToggle);
