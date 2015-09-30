//optionFullscreen.js
var isFullscreen = false;
function fullscreenOff() {
    $('#room-comments').show();
    $('.main-page-container').removeClass('fullscreenFix');
    $('#main-room').removeClass('fullscreenParent');
    $('.left_section').removeClass('fullscreenLeft');
    $('.right_section').removeClass('fullscreenRight');
    $('#chat').removeClass('fullscreenChat');
    $('.chat-messages').removeClass('fullscreenChatChild');
    $('#main_player').removeClass('fullscreenVideo');
    $('.player_container').removeClass('fullscreenVideoChild');
    $('#player-controller').removeClass('fullscreenController');
    isOn = "off";
    $('.bY .isOption').replaceWith('<span class="isOption isOff">OFF</span>');
}
function optionFullscreen() {
    var isOn;
    if (!isFullscreen) {
        isFullscreen = true;
        $('#room-comments').hide();
        $('.main-page-container').addClass('fullscreenFix');
        $('#main-room').addClass('fullscreenParent');
        $('.left_section').addClass('fullscreenLeft');
        $('.right_section').addClass('fullscreenRight');
        $('#chat').addClass('fullscreenChat');
        $('.chat-messages').addClass('fullscreenChatChild');
        $('#main_player').addClass('fullscreenVideo');
        $('.player_container').addClass('fullscreenVideoChild');
        $('#player-controller').addClass('fullscreenController');
        isOn = "on";
        $('.bY .isOption').replaceWith('<span class="isOption isOn">ON</span>');
    } else {
        isFullscreen = false;
        fullscreenOff();
    };
};
$('.bY').click(optionFullscreen);        
function disableFullscreen() {
    isFullscreen = false;
    fullscreenOff();
};
$('.user-info-button').click(disableFullscreen);
window.addEventListener("resize", function(){
    var windowWidth = $(window).width();
    if (windowWidth <= 1185) {
        disableFullscreen();
    } else {
        console.log('Ok');
    }
}, true);