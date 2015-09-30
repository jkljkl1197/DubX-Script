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
        $('.aY .isOption').replaceWith('<span class="isOption isOn">ON</span>');
    } else {
        isAutovote = false;
        isOn = "off";
        $('.currentSong').off();
        $('.aY .isOption').replaceWith('<span class="isOption isOff">OFF</span>');
    }
};
$('.aY').click(optionAutovote);