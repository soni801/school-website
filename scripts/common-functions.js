// Load sections into document
$("#header-pre").load("/sections/header.html", function ()
{
    $("#dropdown-button").load("/assets/icons/chevron.svg");
    $("#old-chevron").load("/assets/icons/chevron.svg");
    launchLoad();
});
$("#footer-pre").load("/sections/footer.html", function ()
{
    $("#yessness-logo-pre").load("/assets/icons/brands/yessness.svg");
    $("#github-logo-pre").load("/assets/icons/brands/github.svg");
    $("#twitch-logo-pre").load("/assets/icons/brands/twitch.svg");
    $("#twitter-logo-pre").load("/assets/icons/brands/twitter.svg");
    $("#youtube-logo-pre").load("/assets/icons/brands/youtube.svg");
});
$("#cursor").load("/assets/icons/cursor.svg");

// Load theme on page launch
function launchLoad()
{
    try
    {
        loadTheme(localStorage.getItem("theme"));
    }
    catch (e)
    {
        loadTheme("light");
    }
}

launchLoad();

// Mouse move callback
$(document).mousemove(function(event)
{
    $("#cursor").css({position: "absolute", top: event.pageY - 100, left: event.pageX, width: "50px", zIndex: 4, pointerEvents: "none"});
});

// Scroll callback
function scroll()
{
    if (pageYOffset > 0) document.querySelector("#header").style.boxShadow = "rgba(var(--preserve-dark), .2) 0 0 2rem";
    else document.querySelector("#header").style.boxShadow = "none";
}

window.onscroll = scroll;

// Toggle dropdown
function toggleDropdown()
{
    switch (getComputedStyle(document.querySelector("#dropdown-content")).opacity)
    {
        case "0": document.querySelector("#dropdown-content").style.opacity = "1"; break;
        case "1": document.querySelector("#dropdown-content").style.opacity = "0"; break;
    }
}

// Toggle website theme
function toggleTheme()
{
    const html = document.querySelector("html");
    const style = getComputedStyle(html);

    const light = style.getPropertyValue("--light");
    const preserveLight = style.getPropertyValue("--preserve-light");

    if (light === preserveLight) loadTheme("dark");
    else loadTheme("light");
}

// Load website theme
function loadTheme(theme)
{
    const html = document.querySelector("html");
    const style = getComputedStyle(html);

    const dark = style.getPropertyValue("--dark");
    const light = style.getPropertyValue("--light");
    const preserveDark = style.getPropertyValue("--preserve-dark");
    const preserveLight = style.getPropertyValue("--preserve-light");

    const $toggle = $("#theme-toggle");

    localStorage.setItem("theme", theme);
    switch (theme)
    {
        case "dark":
            html.style.setProperty("--dark", light);
            html.style.setProperty("--light", dark);
            $toggle.load("/assets/icons/moon.svg");
            break;
        case "light":
            html.style.setProperty("--dark", preserveDark);
            html.style.setProperty("--light", preserveLight);
            $toggle.load("/assets/icons/sun.svg");
    }

    setTimeout(function ()
    {
        document.querySelector("body").style.transition = "color 500ms ease, background 500ms ease";
        document.querySelector("#header").style.transition = "color 500ms ease, background 500ms ease, box-shadow 200ms ease";

        if (pageYOffset > 0) scroll();
    }, 400);
}