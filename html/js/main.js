function altFacebook() {
    var oldsrc = 'images/facebook_gray.png';
    var newsrc = 'images/facebook_green.png';
    $('#facebook').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

function altTwitter() {
    var oldsrc = 'images/twitter_alt_gray.png';
    var newsrc = 'images/twitter_alt_green.png';
    $('#twitter').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

function altGoogle() {
    var oldsrc = 'images/google_gray.png';
    var newsrc = 'images/google_green.png';
    $('#google').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

function altYoutube() {
    var oldsrc = 'images/linkedin_gray.png';
    var newsrc = 'images/linkedin_green.png';
    $('#linkedin').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
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