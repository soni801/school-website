fetch("../content/skolearbeid.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.skolearbeid.length; i++)
        {
            document.getElementById("content").innerHTML +=
                "<div id='" + data.skolearbeid[i].title.replace(/\s/g, "") + "'>" +
                    "<img src='" + data.skolearbeid[i].image + "' alt='" + data.skolearbeid[i].title + "'>" +
                    "<div>" +
                        "<h2>" + data.skolearbeid[i].title + "</h2>" +
                        "<p>" + data.skolearbeid[i].content + "</p>" +
                    "</div>" +
                "</div>";
        }
    });