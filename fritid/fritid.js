// Load content
fetch("fritid.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.fritidsaktiviteter.length; i++)
        {
            document.getElementById("content").innerHTML +=
                "<div id='" + data.fritidsaktiviteter[i].title.replace(/\s/g, "-").toLowerCase() + "'>" +
                    "<img src='" + data.fritidsaktiviteter[i].image + "' alt='" + data.fritidsaktiviteter[i].title + "'>" +
                    "<div class='content-text'>" +
                        "<h2>" + data.fritidsaktiviteter[i].title + "</h2>" +
                        "<p>" + data.fritidsaktiviteter[i].content + "</p>" +
                    "</div>" +
                "</div>";
        }
    });

// Change background image on page scroll
let scrollMemory;
document.onscroll = function ()
{
    const scrollDistance = Math.round((pageYOffset + 400) / 1000) -1;
    if (scrollDistance === scrollMemory) return;
    else scrollMemory = scrollDistance;

    const sections = document.querySelectorAll(".content-text");

    for (let i = 0; i < sections.length; i++)
    {
        sections[i].previousSibling.style.opacity = "0";
    }

    sections[scrollDistance].previousSibling.style.opacity = "1";
}