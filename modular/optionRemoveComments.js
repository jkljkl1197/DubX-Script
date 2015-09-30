//optionRemoveComments.js
var isCommentsToggle = false;		
function removeComments() {
    var isOn
        if (!isCommentsToggle) {
            isCommentsToggle = true
            $('#room-comments').addClass('hideElement')
        } else {
            isCommentsToggle = false
            $('#room-comments').removeClass('hideElement');
        }

};
$('.videoCommentsToggle').click(removeComments);