let cards = document.querySelectorAll(".card");
console.log(cards);
document.addEventListener("DOMContentLoaded", () => {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log(card, "iiiiii");
      cards.forEach((item) => {
        item.classList.remove("active");
      });
      card.classList.add("active");
    });
  });
});
//
