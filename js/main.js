/*--- NAV BUTTON TOGGLE ---*/
document.getElementById('nav-button').addEventListener("click", function() {
    if (document.getElementById('main-nav').style.display == '') {
        document.getElementById('main-nav').style.display = 'block';
    }
    // If display is empty, CSS overrides with display: none;
    else {
        document.getElementById('main-nav').style.display = '';
    }
});
