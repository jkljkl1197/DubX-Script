//optionVideoChatToggle.js
var isChatToggle = false;
function removeChat() {
    var isOn
        if (!isChatToggle) {
            isChatToggle = true;
            $('#dubtrack-video-realtime .toggle_videos').addClass('hideElement');
        } else {
            isChatToggle = false;
            $('#dubtrack-video-realtime .toggle_videos').removeClass('hideElement');
        }

};

$('.videoChatToggle').click(removeChat);
