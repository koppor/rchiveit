function ISSNFromLocationBar(){
    var hash = window.location.hash.split('#')[1];
    if (isValidISSN(hash)){
        return hash;
    }
    return  null;
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
        // do nothing here.
    }
    return o;
}

function showMessage(message, type) {
    if (!type) {
        type = 'info';
    }
    $('<div class="alert alert-' + type + '" style="margin-top:15px;">' + message + '</div>').css('display', 'none').appendTo('div.page-header').fadeIn();
}

function hideAllMessages() {
    $('div.alert').fadeOut().remove();
}

function cleanResults() {
    $('div.row.row-journals').remove();
    $('.may-hide').hide();
    $('.may-empty').text('');
}

function pleaseWait(active) {
    if (active) {
        $('<div class="spinning well-lg text-center"><i class="icon-spinner icon-spin icon-4x"></i></div>').appendTo('div.panel-body.pre-results').fadeIn();
    } else {
        $('div.spinning').fadeOut().remove();
    }
}

function scrollTo(id, speed) {
    if (!speed)
        speed = 1500;
    $('body, html').animate({ scrollTop: $(id).offset().top}, speed);
}

//http://neilang.com/entries/validate-an-issn-using-javascript/
function isValidISSN(issn) {
    if (!issn)
        return false;
    
    issn = issn.replace(/[^\dX]/gi, '');
    if (issn.length != 8) {
        return false;
    }
    var chars = issn.split('');
    if (chars[7].toUpperCase() == 'X') {
        chars[7] = 10;
    }
    var sum = 0;
    for (var i = 0; i < chars.length; i++) {
        sum += ((8 - i) * parseInt(chars[i]));
    }

    return ((sum % 11) == 0);
}