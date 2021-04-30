let cardFocus = [1, 1];
rearrange(cardFocus[0], 0);
rearrange(cardFocus[1], 1);

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