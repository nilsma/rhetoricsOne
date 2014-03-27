/**
 * a function to change the facebook icon from
 * grayscale to color on mouseenter, and back again
 * on mouseleave
 */
function altFacebook() {
    var oldsrc = 'images/facebook_gray.png';
    var newsrc = 'images/facebook_blue.png';
    $('#facebook').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to change the twitter icon from
 * grayscale to color on mouseenter, and back again
 * on mouseleave
 */
function altTwitter() {
    var oldsrc = 'images/twitter_alt_gray.png';
    var newsrc = 'images/twitter_alt_blue.png';
    $('#twitter').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to change the gootle icon from
 * grayscale to color on mouseenter, and back again
 * on mouseleave
 */
function altGoogle() {
    var oldsrc = 'images/google_gray.png';
    var newsrc = 'images/google_blue.png';
    $('#google').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to change the youtube icon from
 * greyscale to color on mouseenter, and back again
 * on mouseleave
 */
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
        element.style.margin='22em 1em 0 0';
    } else {
        element.style.margin='8em 1em 0 0';
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

/**
 * a function that operates with a callback chain first calling topOverlay(),
 * before calling bottomOverlay(), and lastly fades out the showcase top overlay text
 */
function graphicsCtrl() {
    topOverlay(function() {
        bottomOverlay(function() {
            $('div#top_overlay h3').fadeOut(1500);
        });
    });
}

/**
 * a function that fades in the showcase top overlay text,
 * the function works on a timeout callback function
 * @param callback functino - the callback function be run
 */
function topOverlay(callback) {
    setTimeout(function() {
        $(document).ready(function() {
            $('div#top_overlay h3').fadeIn(1000);
        });
        callback();
    }, 1000);
}

/**
 * a function that fades in the showcase bottom overlay text,
 * the function works on a timeout callback function
 * @param callback function - the callback function to be run
 */
function bottomOverlay(callback) {
    setTimeout(function() {
        $('div#bottom_overlay').fadeIn(2000);
        var first = document.getElementById('first');
        var second = document.getElementById('second');
        changeBkg(first, false);
        changeBkg(second, true);
        callback();
    }, 1800);
}

/**
 * a function that fades the given element in or out depending on the direction given
 * @param element HTMLElement - the element to be faded
 * @param direction boolean - will fade the given element in if true, and fade out otherwise
 */
function changeBkg(element, direction) {
    if(direction) {
        $(element).fadeIn(2500);
    } else {
        $(element).fadeOut(2500);
    }
}

/**
 * a function that initiates the settings of the page's elements
 * on window load
 */
window.onload = function initiate() {
    hideDetails();
    altFacebook();
    altTwitter();
    altGoogle();
    altYoutube();
    graphicsCtrl();
};