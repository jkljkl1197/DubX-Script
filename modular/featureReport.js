//featureReport.js
function showRequest() {
    $('.featureRequest').show();
}
function requestSlack() {
    var valUser2 = $('.userB').val();
    var valRequest = $('.requestB').val();
    var isRequest = valUser2 + ': ' + valRequest;
    $.ajax({
        type: 'POST',
        url: 'https://hooks.slack.com/services/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',
        data: 'payload={"username": "Incoming Feature Request", "text": "' + isRequest + '", "icon_emoji": ":bulb:"}',
        crossDomain: true
    }).done(function(msg) {
        console.log(msg);
    });
}

//iY: FEATURE REQUEST
$('.iY').click(showRequest);
$('.requestGo').click(requestSlack);

$('.requestGo').click(function() {
    $('.featureRequest').remove();
    $('.iY .isOption').replaceWith('<span class="isOption isOff">THANKS</span>');
});
$('.requestCancel').click(function() {
    $('.featureRequest').hide();
    $('.userB').val('');
    $('.requestB').val('');
});

var relateB = document.querySelector('.relate');
$(relateB).click(function() {
    $('.relateA').slideToggle("fast");
});