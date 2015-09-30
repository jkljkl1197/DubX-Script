//userBackground.js
$('.mY').click(function() {
    $('.BSSRequest').show();
});
$('.BSSClassCancel').click(function() {
    $('.BSSRequest').hide();
    $('.userCustomB').remove();
    localStorage.setItem('requireBSS',null);
});

//Ref 2: Custom BSS
function addBSS() {
    $('.customBackground').remove();
    var userBSS = $('.requestBSS').val();
    localStorage.setItem('requireBSS',userBSS);
    $('.userCustomB').remove();
    $('body').append('<div class="userCustomB" style="width: 100vw;height: 100vh;z-index: -999998;position: fixed; background: url(' + userBSS + ');background-size: cover;top: 0;"></div>');
    $('.BSSRequest').hide();
}
function storeBSS() {
    if (localStorage.getItem('requireBSS') !== null) {
        var localBSS = localStorage.getItem('requireBSS');
        $('body').append('<div class="userCustomB" style="width: 100vw;height: 100vh;z-index: -999998;position: fixed; background: url(' + localBSS + ');background-size: cover;top: 0;"></div>');
    } else {
        console.log('OK');
    }
}
$('.storeBSSClass').click(addBSS);
$('document').ready(storeBSS);