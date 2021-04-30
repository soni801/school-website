// Resize iframes on load
window.onload = function ()
{
    const iframes = document.getElementsByTagName("iframe");

    for (let i = 0; i < iframes.length; i++)
    {
        iframes[i].style.height = iframes[i].offsetWidth / 16 * 9 + "px";
    }
};

// Resize iframes on window resize
$(window).on('resize',function ()
{
    const iframes = document.getElementsByTagName("iframe");

    for (let i = 0; i < iframes.length; i++)
    {
        iframes[i].style.height = iframes[i].offsetWidth / 16 * 9 + "px";
    }
});

// TODO: Themes