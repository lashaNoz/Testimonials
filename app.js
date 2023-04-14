const cards = document.querySelectorAll(".card");
const quote = document.querySelector(".quote");
const quoteText = document.querySelector(".quote-text");
quoteText.textContent = cards[0].lastElementChild.textContent;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    quoteText.textContent = card.lastElementChild.textContent;
    quote.style.borderColor = getComputedStyle(card).borderColor;
    cards.forEach((item) => (item.style.backgroundColor = "transparent"));
    card.style.backgroundColor = "#333";
  });
});
