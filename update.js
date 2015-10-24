$('head').prepend('<link rel="stylesheet" type="text/css" href="https://rawgit.com/sinfulBA/DubX-Script/master/asset.css">');
function onErr(error) {
    var onErr = [
        '<div class="onErr">',
            '<div class="container">',
                '<div class="title">',
                    '<h1>Oh noes:</h1>',
                '</div>',
                '<div class="content">',
                    '<p>'+error+'</p>',
                '</div>',
                '<div class="control">',
                    '<div class="cancel" onclick="hello.closeErr();">',
                        '<p>Cancel</p>',
                    '</div>',
                    '<div class="confirm confirm-err">',
                        '<p>Okay</p>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');
    $('body').prepend(onErr);
};
function closeErr() {
    $('.onErr').remove();
}
$('.cancel').click(closeErr);
$('.confirm-err').click(closeErr);
onErr('We apologise for the inconvenience. We are currently working on making DubX compatible with the new Dubtrack update. Check back in a few hours and we should have sorted everything out.');
