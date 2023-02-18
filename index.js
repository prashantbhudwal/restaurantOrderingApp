import renderFoodItemCards from "./renderFoodItemCards.js";
import element from "./DomElements.js";
import updateCart from "./updateCart.js";

renderFoodItemCards();

const handleClick = function (event) {
  updateCart(event);
};

element.cardContainer.addEventListener("click", handleClick);
