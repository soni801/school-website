//Load content
fetch("skole.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.skolearbeid.length; i++)
        {
            document.getElementById("content").innerHTML +=
                "<div id='" + data.skolearbeid[i].title.replace(/\s/g, "-").toLowerCase() + "'>" +
                    "<img src='" + data.skolearbeid[i].image + "' alt='" + data.skolearbeid[i].title + "'>" +
                    "<div class='content-text'>" +
                        "<p class='subject'>" + data.skolearbeid[i].subject + "</p>" +
                        "<h2>" + data.skolearbeid[i].title + "</h2>" +
                        "<p>" + data.skolearbeid[i].content + "</p>" +
                        "<p class='date'>" + data.skolearbeid[i].date + "</p>" +
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