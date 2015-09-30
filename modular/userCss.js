//userCss.js
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
	