import getClickInformation from "./getClickInformation.js";
import foodItemsArray from "./data.js";

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
  return Math.max(newCount, 0);
};

const updateCart = function (event) {
  const { itemCountElement, itemOperation, itemId } =
    getClickInformation(event);
  const itemState = getItemStateObject(itemId);
  const currentCount = itemState.count;
  const newCount = getNewCount(itemOperation, currentCount);
  itemState.count = newCount; //Updates state
  itemCountElement.innerText = itemState.count; // Updates UI
};

export default updateCart;
