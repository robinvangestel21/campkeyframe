function showHamburgerMenu(){
    document.getElementById("hamburger-container").style.opacity = 1;
    document.getElementById("hamburger-container").style.left = 0;
    //document.getElementById("foreground-container").style.position="fixed";
}

function hideHamburgerMenu(){
    document.getElementById("hamburger-container").style.left = "100vw";
    //document.getElementById("foreground-container").style.position="static";
    setTimeout(function(){
        document.getElementById("hamburger-container").style.opacity = 0;
    }, 501);
    
}

