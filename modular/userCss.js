//userCss.js
$('body').prepend('<style>.RSSRequest{display: none; width: 100vw; height: 100vw; background: rgba(0, 0, 0, 0.5); position: fixed; z-index: 2147483647; font-weight: 400;}.containerB{display: block; margin-top: 108px; margin-left: auto; margin-right: auto; position: relative; box-shadow: 0 0 5px #000; background: #111; color: #fff; width: 640px;}.RSSTitle{height: 54px; background: #333;}.RSSTitle h1{margin: 0; text-align: center; padding-top: 15px; font-weight: 400;}.RSSRequest form{width: 75%; margin: 0 auto; padding: 27px;}.RSSRequest form p{margin: 0; padding-bottom: 16px;}.RSSRequest form input{width: 100%; background: #333; padding: 16px; color: white; border-radius: 5px; border: transparent;}.RSSControl{display: inline-block; width: 100%; font-size: 0;}.RSSControl .RSSClassCancel{display: inline-block; width: 50%; text-align: center; background: #333; font-size: 16px;}.RSSControl .storeRSSClass{display: inline-block; width: 50%; text-align: center; background: magenta; font-size: 16px;}</style><div class="RSSRequest"> <div class="containerB"> <div class="RSSTitle"> <h1>Import a .CSS file:</h1> </div><form> <p>Link to .CSS file:</p><input class="requestRSS" type="text" name="CSS" placeholder="example.com/example.css"> </form> <div class="RSSControl"> <div class="RSSClassCancel"> <p>Cancel</p></div><div class="storeRSSClass"> <p>Okay</p></div></div></div></div>');
$('.jY').click(function() {
$('.RSSRequest').show();
});
$('.RSSClassCancel').click(function() {
    $('.RSSRequest').hide();
});

//Ref 2: Custom RSS
function addRSS() {
    $('.customCSS').remove();
    var userRSS = $('.requestRSS').val();
    localStorage.setItem('requireRSS',userRSS);
    $('head').append('<link class="customCSS" href="' + userRSS + '" rel="stylesheet" type="text/css">');
    $('.RSSRequest').hide();
}
function storeRSS() {
    if (localStorage.getItem('requireRSS') !== null) {
        var localRSS = localStorage.getItem('requireRSS');
        $('head').append('<link class="customCSS" href="' + localRSS + '" rel="stylesheet" type="text/css">');
    } else {
        console.log('OK');
    }
}
$('.storeRSSClass').click(addRSS);
$('document').ready(storeRSS);

$(this).replaceWith('<span class="bpm-emote bpmote-'+userDefinedEmoticon+'" style="display:block;float:none;"></span>');
        
