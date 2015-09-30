//boothDuration.js
$('.player_sharing').append('<span class="durationRemaining" style="font-size: 14px;margin: 6px;">...</span>');
function boothDuration() {
    var time = 4;
    var currentTimeMinStr = $('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.min').text();
    var currentTimeMinInt = parseInt(currentTimeMinStr);
    var boothDurationStr = $('.queue-info').text();
    var boothDurationInt = parseInt(boothDurationStr);
    var boothDurationLeft = (boothDurationInt * time - time) + currentTimeMinInt;
    if (boothDurationLeft >= 0) {
        $('.durationRemaining').replaceWith('<span class="durationRemaining" style="font-size: 14px;margin: 6px;">You will be on the booth in approximately ' + boothDurationLeft + ' minutes.</span>');
    } else {
        $('.durationRemaining').replaceWith('<span class="durationRemaining" style="font-size: 14px;margin: 6px;”>...</span>');
    }
}
$('.queue-info').bind("DOMSubtreeModified", boothDuration);