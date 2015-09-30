//optionAutovote.js
var isAutovote = false;
function optionAutovote() {
    var isOn;
    if (!isAutovote) {
        isAutovote = true;
        isOn = "on";
        $('.dubup').click();
        function advanceVote() {
            $('.dubup').click();
        };
        $('.currentSong').bind("DOMSubtreeModified", advanceVote);
        $('.aY .isOnOff i').replaceWith('<i class="fi-check"></i>');
    } else {
        isAutovote = false;
        isOn = "off";
        $('.currentSong').off();
        $('.aY .isOnOff i').replaceWith('<i class="fi-x"></i>');
    }
};
$('.aY').click(optionAutovote);