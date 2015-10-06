//optionOnBeforeUnload.js
var isOnBeforeUnload = false;
function optionOnBeforeUnload() {
    var isOn
        if (!isOnBeforeUnload) {
            isOnBeforeUnload = true
            isOn = "on";
            window.onbeforeunload = function(e) {
                return 'You sure about that?';
            };
            localStorage.setItem('isOnBeforeUnload','true');
            $('.oY .isOnOff i').replaceWith('<i class="fi-check"></i>');
        } else {
            isOnBeforeUnload = false
            isOn = "off";
            window.onbeforeunload = null;
            localStorage.setItem('isOnBeforeUnload','false');
            $('.oY .isOnOff i').replaceWith('<i class="fi-x"></i>');
        }
};

if (localStorage.getItem('isOnBeforeUnload') === 'true') {
    optionOnBeforeUnload();
};

$('.oY').click(optionOnBeforeUnload);