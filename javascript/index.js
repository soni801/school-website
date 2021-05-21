let cardFocus = [1, 1];
rearrange(cardFocus[0], 0);
rearrange(cardFocus[1], 1);

// Load preview cards
fetch("../skole/skole.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < 3; i++)
        {
            document.querySelector("#school-card-" + (i + 1) + " .card-content h2").innerHTML = data.skolearbeid[i].title;
            document.querySelector("#school-card-" + (i + 1) + " .card-content p").innerHTML = data.skolearbeid[i].content;
            document.querySelector("#school-card-" + (i + 1) + " .card-image").src = data.skolearbeid[i].image;
        }
    });

fetch("../fritid/fritid.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < 3; i++)
        {
            document.querySelector("#other-card-" + (i + 1) + " .card-content h2").innerHTML = data.fritidsaktiviteter[i].title;
            document.querySelector("#other-card-" + (i + 1) + " .card-content p").innerHTML = data.fritidsaktiviteter[i].content;
            document.querySelector("#other-card-" + (i + 1) + " .card-image").src = data.fritidsaktiviteter[i].image;
        }
    });

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
}