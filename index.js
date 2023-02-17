import renderFoodItemCards from "./renderFoodItemCards.js";
import element from "./DomElements.js";
import getClickInformation from "./getClickInformation.js";
renderFoodItemCards();

const handleClick = function (event) {
  const { cardId, itemOperation } = getClickInformation(event);
  console.log(cardId);
};

element.cardContainer.addEventListener("click", handleClick);

// 1. if click form +, fn1, else fn 2
