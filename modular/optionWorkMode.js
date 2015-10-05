//optionWorkMode.js
var isWork = false;
function optionWork() {
    var isOn;
    if (!isWork) {
        isWork = true;
        $('#main-room').hide();
        disableFullscreen();
        isOn = "on";
        localStorage.setItem('isWork','true');
        $('.fY .isOnOff i').replaceWith('<i class="fi-check"></i>');
    } else {
        isWork = false;
        $('#main-room').show();
        isOn = "off";
        localStorage.setItem('isWork','false');
        $('.fY .isOnOff i').replaceWith('<i class="fi-x"></i>');
    }
};
function disableWork() {
    isWork = true;
    $('#main-room').show();
    isOn = "on";
    $('.fY .isOnOff i').replaceWith('<i class="fi-x"></i>');
};

if (localStorage.getItem('isWork') === 'true') {
    optionWork();
};


$('.fY').click(optionWork);
$('.user-info-button').click(disableWork);
        
