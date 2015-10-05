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
        localStorage.setItem('isAutovote','true');
        $('.aY .isOnOff i').replaceWith('<i class="fi-check"></i>');
    } else {
        isAutovote = false;
        isOn = "off";
        $('.currentSong').off();
        localStorage.setItem('isAutovote','false');
        $('.aY .isOnOff i').replaceWith('<i class="fi-x"></i>');
    }
};

if (localStorage.getItem('isAutovote') === 'true') {
    optionAutovote();
};

$('.aY').click(optionAutovote);
