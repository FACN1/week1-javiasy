// toggle navigation menu
var navVisible = false;
document.getElementById('nav-button').addEventListener("click", function() {
    if (!navVisible) {
        document.getElementById('main-nav').style.display = 'block';
        navVisible = true;
    } else { // if display is empty, CSS overrides with display: none;
        document.getElementById('main-nav').style.display = '';
        navVisible = false;
    }
});

// hide mobile menu when user clicks a menu button
var navlinks = document.querySelectorAll('nav li a');
for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", hideNavBar);
}

function hideNavBar() {
    document.getElementById('main-nav').style.display = '';
    navVisible = false;
}

// simple script to make button visible if JS enabled (default not visible)
document.getElementById('js-button').style.display = 'block';
