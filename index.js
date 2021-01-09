function openMenu()
{
    document.getElementById("menu").style.width = "250px";
    document.getElementById("close-button").style.visibility = "visible";
    document.getElementById("close-button").style.opacity = "1";
}

function closeMenu()
{
    document.getElementById("menu").style.width = "0";
    document.getElementById("close-button").style.visibility = "hidden";
    document.getElementById("close-button").style.opacity = "0";
}