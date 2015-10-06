//bugReport.js
$('body').prepend('<style>.bugReport{display:none;width: 100vw; height: 100vw; background: rgba(0,0,0,0.5); position: fixed; z-index: 2147483647; font-weight: 400;}.containerY{display: block; margin-top: 108px; margin-left: auto; margin-right: auto; position: relative; box-shadow: 0 0 5px #000; background: #111; color: #fff; width: 640px;}.reportY{resize: none;}.reportTitle{height: 54px; background: #333;}.reportTitle h1{margin: 0; text-align: center; padding-top: 15px; font-weight: 400;}.bugReport form{width: 75%; margin: 0 auto; padding: 27px;}.bugReport form p{margin: 0; padding-bottom: 16px;}.bugReport form input{width: 100%; background: #333; padding: 16px; color: white; border-radius: 5px; border: transparent;}.bugReport form textarea{width: 100%; height: 108px; background: #333; padding: 16px; color: white; border-radius: 5px; border: transparent;}.reportControl{display: inline-block; width: 100%; font-size: 0;}.reportControl .reportCancel{display: inline-block; width: 50%; text-align: center; background: #333; font-size: 16px;}.reportControl .reportGo{display: inline-block; width: 50%; text-align: center; background: magenta; font-size: 16px;}.reportFix{padding-top: 16px;}</style><div class="bugReport"> <div class="containerY"> <div class="reportTitle"> <h1>Report a bug:</h1> </div><form> <p>Username:</p><input class="userY" type="text" name="user" placeholder="@Username"> <p class="reportFix">Report:</p><textarea class="reportY" type="text" name="report" placeholder="Please give a detailed description of the bug."></textarea> </form> <div class="reportControl"> <div class="reportCancel"> <p>Cancel</p></div><div class="reportGo"><p>Okay</p></div></div></div></div>');
function showReport() {
    $('.bugReport').show();
}
$('.gY').click(showReport);            
function reportSlack() {
    var valUser = $('.userY').val();
    var valReport = $('.reportY').val();
    var isReport = valUser + ': ' + valReport;
    $.ajax({
        type: 'POST',
        url: 'https://hooks.slack.com/services/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',
        data: 'payload={"username": "Incoming Bug Report", "text": "' + isReport + '", "icon_emoji": ":bug:"}',
        crossDomain: true
    }).done(function(msg) {
        console.log(msg);
    });
}
$('.reportGo').click(reportSlack);  
$('.reportGo').click(function() {
    $('.bugReport').remove();
    $('.gY .isOnOff i').replaceWith('<i class="fi-check"></i>');
});        
$('.reportCancel').click(function() {
    $('.bugReport').hide();
    $('.userY').val('');
    $('.reportY').val('');
});
