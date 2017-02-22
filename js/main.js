document.getElementById('nav-button').addEventListener("click", function() {
    if (document.getElementById('main-nav').style.display == '')    // If display is empty, CSS overrides with display: none;
        document.getElementById('main-nav').style.display = 'block';
    else
        document.getElementById('main-nav').style.display = '';
});
