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

window.onload = function ()
{
    const iframes = document.getElementsByTagName("iframe");

    for (let i = 0; i < iframes.length; i++)
    {
        console.log(iframes[i].offsetWidth);
        iframes[i].style.height = iframes[i].offsetWidth / 16 * 9 + "px";
    }
};

$(window).on('resize',function ()
{
    const iframes = document.getElementsByTagName("iframe");

    for (let i = 0; i < iframes.length; i++)
    {
        console.log(iframes[i].offsetWidth);
        iframes[i].style.height = iframes[i].offsetWidth / 16 * 9 + "px";
    }
});