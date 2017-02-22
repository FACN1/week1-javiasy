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

var navlink=document.querySelectorAll('nav li a')

for (var i=0; i<navlink.length; i++){
  navlink[i].addEventListener("click", function(){
  document.getElementById('main-nav').style.display = '';
  navVisible = false;
});
}

//simple script to make button visible if JS enabled (default not visible)
document.getElementById('js-button').style.display = 'block';
