function altFacebook() {
    var oldsrc = 'images/facebook_gray.png';
    var newsrc = 'images/facebook_blue.png';
    $('#facebook').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

function altTwitter() {
    var oldsrc = 'images/twitter_alt_gray.png';
    var newsrc = 'images/twitter_alt_blue.png';
    $('#twitter').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

function altGoogle() {
    var oldsrc = 'images/google_gray.png';
    var newsrc = 'images/google_blue.png';
    $('#google').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

function altYoutube() {
    var oldsrc = 'images/linkedin_gray.png';
    var newsrc = 'images/linkedin_blue.png';
    $('#linkedin').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to move the left div image holder up or down dependent of the direction given
 * the function moves the div a set distance to match the showcase div
 * @param direction boolean - moves the div further down if false, up otherwise
 */
function adjustHeadshot(direction) {
    var element = document.getElementById('left_container');
    if(direction == false) {
        element.style.margin='20.7em 1em 0 0';
    } else {
        element.style.margin='6.7em 1em 0 0';
    }
}

/**
 * a function that shows the paragraph span elements of class 'hidden'
 * by changing the css display value to 'block', and also toggles the
 * show/hide details link in the article accordingly
 */
function showDetails() {
    var elements = getElements();
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.display='block';
    }
    adjustHeadshot(false);
    toggleLink();
}

/**
 * a function that hides the paragraph span elements of class 'hidden'
 * by changing the css display value to 'none', and also toggles the
 * show/hide details link in the article accordingly
 */
function hideDetails() {
    var elements = getElements();
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.display='none';
    }
    adjustHeadshot(true);
    toggleLink();
}

/**
 * a function that toggles the display of the show/hide details link
 * in the article according to the present state of that link:
 * the link that is currently displayed will be hidden, and vice versa
 */
function toggleLink() {
    var hideLink = document.getElementById('hideDetails');
    var showLink = document.getElementById('showDetails');
    var computedStyle = getComputedStyle(hideLink, null);
    if(computedStyle.display == 'block') {
        hideLink.style.display='none';
        showLink.style.display='block';
    } else {
        hideLink.style.display='block';
        showLink.style.display='none';
    }
}

/**
 * a function to get the paragraph span elements of class 'hidden'
 * @returns {NodeList} elements - an array of elements of class 'hidden'
 */
function getElements() {
    return document.getElementsByClassName('hidden');
}

window.onload = function initiate() {
    hideDetails();
    altFacebook();
    altTwitter();
    altGoogle();
    altYoutube();
};