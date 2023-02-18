import renderFoodItemCards from "./renderFoodItemCards.js";
import element from "./DomElements.js";
import getClickInformation from "./getClickInformation.js";
import foodItemsArray from "./data.js";

renderFoodItemCards();

const getItemStateObject = function (itemId) {
  const filteredItemsArray = foodItemsArray.filter((item) => {
    return item.id === itemId;
  });
  const itemStateObject = filteredItemsArray[0];
  return itemStateObject;
};

const getNewCount = function (itemOperation, currentCount) {
  const newCount =
    itemOperation === "add"
      ? currentCount + 1
      : itemOperation === "subtract"
      ? currentCount - 1
      : null;
  return newCount;
};

const updateCountState = function (newCount, itemId) {
  let itemState = getItemStateObject(itemId);
  console.log(itemState);
//   TODO I have no idea what is happening here.
  itemState.count += newCount; 
  return itemState.count;
};

const getCurrentCount = function (itemId) {
  const itemState = getItemStateObject(itemId);
  return itemState.id;
};

const handleClick = function (event) {
  const { itemCountElement, itemOperation, itemId } =
    getClickInformation(event);

  const currentCount = getCurrentCount(itemId);
  const newCount = getNewCount(itemOperation, currentCount);
  itemCountElement.innerText = updateCountState(newCount, itemId);
};

element.cardContainer.addEventListener("click", handleClick);
