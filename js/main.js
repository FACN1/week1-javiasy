var navVisible = false;

/*--- NAV BUTTON TOGGLE ---*/
document.getElementById('nav-button').addEventListener("click", function() {
    if (!navVisible) {
        document.getElementById('main-nav').style.display = 'block';
        navVisible = true;
    }
    // If display is empty, CSS overrides with display: none;
    else {
        document.getElementById('main-nav').style.display = '';
        navVisible = false;
    }
});
