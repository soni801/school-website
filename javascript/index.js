let current = 1;
rearrange(current);

function rearrange(card)
{
    if (card > 2) card -= 3;
    if (card < 0) card += 3;
    current = card;

    let cards = document.querySelectorAll("#school-projects-cards .card");
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