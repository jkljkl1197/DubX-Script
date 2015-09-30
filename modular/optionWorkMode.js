//optionWorkMode.js
var isWork = false;
function optionWork() {
    var isOn;
    if (!isWork) {
        isWork = true;
        $('#main-room').hide();
        disableFullscreen();
        isOn = "on";
        $('.fY .isOnOff i').replaceWith('<i class="fi-x"></i>');
    } else {
        isWork = false;
        $('#main-room').show();
        isOn = "off";
        $('.fY .isOnOff i').replaceWith('<i class="fi-x"></i>');
    }
};
function disableWork() {
    isWork = true;
    $('#main-room').show();
    isOn = "on";
    $('.fY .isOnOff i').replaceWith('<i class="fi-x"></i>');
};
$('.fY').click(optionWork);
$('.user-info-button').click(disableWork);
        