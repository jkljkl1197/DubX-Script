/* Show the song title on hover when in the mobile view */
var mobileWidth = 1134;
var isMobile = $(window).width() <= mobileWidth;
// create holder span that will be the popup
var songTitlePopup = document.createElement('span');
songTitlePopup.style.cssText = "display: none; padding: 3px 4px; background-color:rgba(0,0,0,0.8); position: absolute; bottom: 44px; left: 0; width: 100%; z-index: 99;";
songTitlePopup.id = "songTitlePopup";
document.body.appendChild(songTitlePopup);

// add hover to infoContainer
$('#player-controller')
  .mouseenter(function(e){
    if (isMobile) { $('#songTitlePopup').show(); }
  })
  .mouseleave(function(e){
    if (isMobile) { $('#songTitlePopup').hide(); }
  });

function getTitle() {
  isMobile = $(window).width() <= mobileWidth;
  var songTitle = $('.currentSong').text();
  $('#songTitlePopup').text(songTitle);
}
getTitle();

// bind on resize
$(window).resize(function(){
  isMobile = $(window).width() <= mobileWidth;
});
// bind on new song change
Dubtrack.Events.bind("realtime:room_playlist-update", getTitle);



