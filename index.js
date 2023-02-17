import renderFoodItemCards from "./renderFoodItemCards.js";
import element from "./DomElements.js";
import getClickInformation from "./getClickInformation.js";
import foodItemsArray from "./data.js";

renderFoodItemCards();

const increaseByOne = (item) => (item += 1);
const decreaseByOne = (item) => (item -= 1);

const getNewCount = function (itemOperation, currentCount) {
  const newCount =
    itemOperation === "add"
      ? increaseByOne(currentCount)
      : itemOperation === "subtract"
      ? decreaseByOne(currentCount)
      : null;
  return newCount;
};

const handleClick = function (event) {
  const { itemId, itemOperation } = getClickInformation(event);
  //   console.log(itemId);
  //   console.log(itemOperation);

  //  TODO const currentCount = f(itemId);
  const newCount = getNewCount(itemOperation, currentCount);
  
  // Update elements based on new count
  //   foodItemsArray[0].count = foodItemsArray[0].count + 5;
  //   document
  //     .querySelector
  //     // TODO"#card-2>.card-actions-wrapper>.item-counter-wrapper>.action-buttons-wrapper"
  //     ().innerHTML = foodItemsArray[0].count;
};

element.cardContainer.addEventListener("click", handleClick);
