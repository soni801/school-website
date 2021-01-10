// Open mobile navigation menu
function openMenu()
{
    document.getElementById("menu").style.width = "80%";

    document.getElementById("close-button").style.visibility = "visible";
    document.getElementById("close-button").style.opacity = "1";

    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = ".5";

    document.getElementById("links").style.visibility = "visible";
    document.getElementById("links").style.opacity = "1";
}

// Close mobile navigation menu
function closeMenu()
{
    document.getElementById("menu").style.width = "0";

    document.getElementById("close-button").style.visibility = "hidden";
    document.getElementById("close-button").style.opacity = "0";

    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("overlay").style.opacity = "0";

    document.getElementById("links").style.visibility = "hidden";
    document.getElementById("links").style.opacity = "0";
}