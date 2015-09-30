//userBackground.js
$('body').prepend('<style>.BSSRequest{display: none; width: 100vw; height: 100vw; background: rgba(0, 0, 0, 0.5); position: fixed; z-index: 2147483647; font-weight: 400;}.containerB{display: block; margin-top: 108px; margin-left: auto; margin-right: auto; position: relative; box-shadow: 0 0 5px #000; background: #111; color: #fff; width: 640px;}.BSSTitle{height: 54px; background: #333;}.BSSTitle h1{margin: 0; text-align: center; padding-top: 15px; font-weight: 400;}.BSSRequest form{width: 75%; margin: 0 auto; padding: 27px;}.BSSRequest form p{margin: 0; padding-bottom: 16px;}.BSSRequest form input{width: 100%; background: #333; padding: 16px; color: white; border-radius: 5px; border: transparent;}.BSSControl{display: inline-block; width: 100%; font-size: 0;}.BSSControl .BSSClassCancel{display: inline-block; width: 50%; text-align: center; background: #333; font-size: 16px;}.BSSControl .storeBSSClass{display: inline-block; width: 50%; text-align: center; background: magenta; font-size: 16px;}</style><div class="BSSRequest"> <div class="containerB"> <div class="BSSTitle"> <h1>Import a .jpg link:</h1> </div><form> <p>Link to .jpg file:</p><input class="requestBSS" type="text" name="Background" placeholder="example.com/example.jpg"> </form> <div class="BSSControl"> <div class="BSSClassCancel"> <p>Cancel</p></div><div class="storeBSSClass"> <p>Okay</p></div></div></div></div>');
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