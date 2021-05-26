// Load sections into document
$("#header-pre").load("/sections/header.html");
$("#footer-pre").load("/sections/footer.html");

// Load theme on page launch
try
{
    loadTheme(localStorage.getItem("theme"));
}
catch (e)
{
    loadTheme("light");
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

function loadTheme(theme)
{
    const html = document.querySelector("html");
    const style = getComputedStyle(html);
    const button = document.querySelector("#theme-toggle");

    const dark = style.getPropertyValue("--dark-mode");
    const light = style.getPropertyValue("--light");
    const preserveDark = style.getPropertyValue("--preserve-dark");
    const preserveLight = style.getPropertyValue("--preserve-light");

    localStorage.setItem("theme", theme);
    switch (theme)
    {
        case "dark":
            html.style.setProperty("--dark", light);
            html.style.setProperty("--light", dark);
            setTimeout(function ()
            {
                button.src = "/assets/icons/sun.svg";
            }, 400);
            break;
        case "light":
            html.style.setProperty("--dark", preserveDark);
            html.style.setProperty("--light", preserveLight);
            setTimeout(function ()
            {
                button.src = "/assets/icons/moon.svg";
            }, 400);
    }
}