//featureReport.js
$('body').prepend('<style>.featureRequest{display:none;width: 100vw; height: 100vw; background: rgba(0,0,0,0.5); position: fixed; z-index: 2147483647; font-weight: 400;}.containerB{display: block; margin-top: 108px; margin-left: auto; margin-right: auto; position: relative; box-shadow: 0 0 5px #000; background: #111; color: #fff; width: 640px;}.requestB{resize: none;}.requestTitle{height: 54px; background: #333;}.requestTitle h1{margin: 0; text-align: center; padding-top: 15px; font-weight: 400;}.featureRequest form{width: 75%; margin: 0 auto; padding: 27px;}.featureRequest form p{margin: 0; padding-bottom: 16px;}.featureRequest form input{width: 100%; background: #333; padding: 16px; color: white; border-radius: 5px; border: transparent;}.featureRequest form textarea{width: 100%; height: 108px; background: #333; padding: 16px; color: white; border-radius: 5px; border: transparent;}.requestControl{display: inline-block; width: 100%; font-size: 0;}.requestControl .requestCancel{display: inline-block; width: 50%; text-align: center; background: #333; font-size: 16px;}.requestControl .requestGo{display: inline-block; width: 50%; text-align: center; background: magenta; font-size: 16px;}.requestFix{padding-top: 16px;}</style><div class="featureRequest"> <div class="containerB"> <div class="requestTitle"> <h1>Request a feature:</h1> </div><form> <p>Username:</p><input class="userB" type="text" name="user" placeholder="@Username"> <p class="requestFix">Request:</p><textarea class="requestB" type="text" name="request" placeholder="Please give a detailed description of the feature."></textarea> </form> <div class="requestControl"> <div class="requestCancel"> <p>Cancel</p></div><div class="requestGo"><p>Okay</p></div></div></div></div>');
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
    $('.iY .isOnOff i').replaceWith('<i class="fi-check"></i>');
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
