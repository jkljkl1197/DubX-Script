//optionAutorespond.js
var isAutorespond = false;
var sendAutorespond = true;
function realtimeChat(data) {
    var realtimeContent = data.message;
    var isUserAfk = Dubtrack.session.get('username');
    if (realtimeContent.indexOf('@'+isUserAfk) >-1) {
        $('#chat-txt-message').val('I am AFK at the moment.');
        Dubtrack.room.chat.sendMessage();
    }
}
function optionAutorespond() {
    var isOn
    if (!isAutorespond) {
        isAutorespond = true
        isOn = "on";
        if (sendAutorespond) {
            Dubtrack.Events.bind('realtime:chat-message',realtimeChat);
            $('.nY .isOnOff i').replaceWith('<i class="fi-check"></i>');
        }
        sendAutorespond = false;
        setTimeout (function(){
            sendAutorespond = true;
        }, 30 * 1000);
    } else {
        isAutorespond = false
        isOn = "off";
        Dubtrack.Events.unbind('realtime:chat-message',realtimeChat);
        $('.nY .isOnOff i').replaceWith('<i class="fi-x"></i>');
    }
};
$('.nY').click(optionAutorespond);
