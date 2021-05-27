// Elements
const welcome = document.querySelector("#welcome");

// Preview cards
loadCards();
let cardFocus = [1, 1];
setTimeout(function ()
{
    rearrange(cardFocus[0], 0);
    rearrange(cardFocus[1], 1);
}, 500);

// Load buttons
$("#school-button-left").load("/assets/icons/chevron-left.svg");
$("#school-button-right").load("/assets/icons/chevron-right.svg");
$("#other-button-left").load("/assets/icons/chevron-left.svg");
$("#other-button-right").load("/assets/icons/chevron-right.svg");

// Initialise tilt
VanillaTilt.init(welcome, {
    max: 4,
    speed: 500,
    scale: 1.06,
    glare: true,
    "max-glare": .25
});

// Load preview cards
function loadCards()
{
    fetch("../skole/skole.json")
        .then(response => response.json())
        .then(data =>
        {
            for (let i = 0; i < 3; i++)
            {
                document.querySelector("#school-projects-cards").innerHTML +=
                    "<div class='card'>" +
                        "<img class='card-image' src='" + data.skolearbeid[i].image + "' alt='Card Preview'>" +
                        "<div class='card-content'>" +
                            "<h2>" + data.skolearbeid[i].title + "</h2>" +
                            "<p>" + data.skolearbeid[i].content + "</p>" +
                        "</div>" +
                    "</div>" +
                    "<div class='fullscreen'>" +
                        "<div class='fullscreen-content'>" +
                            "<img src='" + data.skolearbeid[i].image + "' alt='Image'>" +
                            "<div>" +
                                "<h2>" + data.skolearbeid[i].title + "</h2>" +
                                "<p>" + data.skolearbeid[i].content + "</p>" +
                            "</div>" +
                            "<span class='fullscreen-close' onclick='closeFullscreen(this)'></span>" +
                        "</div>" +
                    "</div>";
            }
            $(".fullscreen-close").load("/assets/icons/cross.svg");
        });

    fetch("../fritid/fritid.json")
        .then(response => response.json())
        .then(data =>
        {
            for (let i = 0; i < 3; i++)
            {
                document.querySelector("#other-projects-cards").innerHTML +=
                    "<div class='card'>" +
                        "<img class='card-image' src='" + data.fritidsaktiviteter[i].image + "' alt='Card Preview'>" +
                        "<div class='card-content'>" +
                            "<h2>" + data.fritidsaktiviteter[i].title + "</h2>" +
                            "<p>" + data.fritidsaktiviteter[i].content + "</p>" +
                        "</div>" +
                    "</div>" +
                    "<div class='fullscreen'>" +
                        "<div class='fullscreen-content'>" +
                            "<img src='" + data.fritidsaktiviteter[i].image + "' alt='Image'>" +
                            "<div>" +
                                "<h2>" + data.fritidsaktiviteter[i].title + "</h2>" +
                                "<p>" + data.fritidsaktiviteter[i].content + "</p>" +
                            "</div>" +
                            "<span class='fullscreen-close' onclick='closeFullscreen(this)'></span>" +
                        "</div>" +
                    "</div>";
            }
        });
}

// Rearrange preview cards
function rearrange(card, collection)
{
    if (card > 2) card -= 3;
    if (card < 0) card += 3;
    cardFocus[collection] = card;

    let cards = collection === 0 ? document.querySelectorAll("#school-projects-cards .card") : document.querySelectorAll("#other-projects-cards .card");
    for(let i = 0; i < cards.length; i++)
    {
        cards[i].classList.remove("card-left");
        cards[i].classList.remove("card-center");
        cards[i].classList.remove("card-right");
        cards[i].removeAttribute("onclick");
    }

    cards[card].classList.add("card-center");

    if(card === 0)
    {
        cards[2].classList.add("card-left");
        cards[1].classList.add("card-right");
    }
    if(card === 1)
    {
        cards[0].classList.add("card-left");
        cards[2].classList.add("card-right");
    }
    if(card === 2)
    {
        cards[1].classList.add("card-left");
        cards[0].classList.add("card-right");
    }

    cards[card].setAttribute("onclick", "openFullscreen(this)");
}

// Open fullscreen view
function openFullscreen(element)
{
    element.nextSibling.style.display = "flex";
}

// Close fullscreen view
function closeFullscreen(element)
{
    element.parentNode.parentNode.style.display = "none";
}