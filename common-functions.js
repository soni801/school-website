// Set theme
let theme = sessionStorage.getItem("theme") === "dark" || sessionStorage.getItem("theme") === "light" ? sessionStorage.getItem("theme") : "dark";
loadTheme();

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

// Change website theme
function changeTheme()
{
    switch (theme)
    {
        case "dark": theme = "light"; break;
        case "light": theme = "dark"; break;
    }

    sessionStorage.setItem("theme", theme);
    loadTheme();
}

// Load website theme
function loadTheme()
{
    const button = document.getElementById("theme-chooser");
    let all;

    if (theme === "light")
    {
        button.src = "assets/icons/moon.png";
        button.style.filter = "invert(1)";

        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";

        try
        {
            const video = document.getElementById("background-video");
            const source = document.createElement("source");
            video.innerHTML = "";
            source.setAttribute("src", "assets/background_light.mp4");
            video.appendChild(source);
            video.load();
            video.play();
        }
        catch (err) {}

        all = document.getElementsByClassName("icon");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.filter = "invert(1)";
        }

        all = document.getElementsByClassName("post");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "white";
        }

        all = document.getElementsByClassName("main");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "white";
        }

        all = document.getElementsByClassName("footer");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "white";
        }

        all = document.getElementsByClassName("background");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "white";
        }

        all = document.getElementsByClassName("navigation-bar");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "white";
        }

        all = document.getElementsByClassName("card");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "white";
        }

        all = document.getElementsByTagName("a");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.color = "black";
        }
    }
    else
    {
        button.src = "assets/icons/sun.png";
        button.style.removeProperty("filter");

        document.body.style.color = "white";
        document.body.style.backgroundColor = "#222";

        try
        {
            const video = document.getElementById("background-video");
            const source = document.createElement("source");
            video.innerHTML = "";
            source.setAttribute("src", "assets/background.mp4");
            video.appendChild(source);
            video.load();
            video.play();
        }
        catch (err) {}

        all = document.getElementsByClassName("icon");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.removeProperty("filter");
        }

        all = document.getElementsByClassName("post");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "#222";
        }

        all = document.getElementsByClassName("main");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "#222";
        }

        all = document.getElementsByClassName("footer");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "#222";
        }

        all = document.getElementsByClassName("background");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "#222";
        }

        all = document.getElementsByClassName("navigation-bar");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "#222";
        }

        all = document.getElementsByClassName("card");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.backgroundColor = "#222";
        }

        all = document.getElementsByTagName("a");
        for (let i = 0; i < all.length; i++)
        {
            all[i].style.color = "white";
        }
    }
}