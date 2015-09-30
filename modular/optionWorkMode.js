//optionWorkMode.js
var isWork = false;
function optionWork() {
    var isOn;
    if (!isWork) {
        isWork = true;
        $('#main-room').hide();
        disableFullscreen();
        isOn = "on";
        $('.fY .isOption').replaceWith('<span class="isOption isOn">ON</span>');
    } else {
        isWork = false;
        $('#main-room').show();
        isOn = "off";
        $('.fY .isOption').replaceWith('<span class="isOption isOff">OFF</span>');
    }
};
function disableWork() {
    isWork = true;
    $('#main-room').show();
    isOn = "on";
    $('.fY .isOption').replaceWith('<span class="isOption isOn">OFF</span>');
};
$('.fY').click(optionWork);
$('.user-info-button').click(disableWork);
        