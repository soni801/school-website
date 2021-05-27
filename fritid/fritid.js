fetch("fritid.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.fritidsaktiviteter.length; i++)
        {
            document.getElementById("content").innerHTML +=
                "<div id='" + data.fritidsaktiviteter[i].title.replace(/\s/g, "") + "'>" +
                    "<img src='" + data.fritidsaktiviteter[i].image + "' alt='" + data.fritidsaktiviteter[i].title + "'>" +
                    "<div class='content-text'>" +
                        "<h2>" + data.fritidsaktiviteter[i].title + "</h2>" +
                        "<p>" + data.fritidsaktiviteter[i].content + "</p>" +
                    "</div>" +
                "</div>";
        }
    });