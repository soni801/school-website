$("#header-pre").load("/sections/header.html");
$("#footer-pre").load("/sections/footer.html");

function toggleTheme()
{
    const html = document.querySelector("html");
    const style = getComputedStyle(html);

    const dark = style.getPropertyValue("--dark-mode");
    const light = style.getPropertyValue("--light");

    const preserveDark = style.getPropertyValue("--preserve-dark");
    const preserveLight = style.getPropertyValue("--preserve-light");

    if (light === preserveLight)
    {
        html.style.setProperty("--dark", light);
        html.style.setProperty("--light", dark);
    }
    else
    {
        html.style.setProperty("--dark", preserveDark);
        html.style.setProperty("--light", preserveLight);
    }
}