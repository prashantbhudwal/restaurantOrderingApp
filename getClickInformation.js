const getItemOperation = function (id) {
  const idSubstringArray = id.split("-", 2);
  let operation = idSubstringArray[1];
  operation =
    operation.toString() === "addItem"
      ? "add"
      : operation.toString() === "removeItem"
      ? "subtract"
      : null;
  return operation;
};

const getItemId = function (id) {
  const cardId = id.split("-", 1).join();
  return parseInt(cardId);
};

const getItemCountId = function (itemId) {
  return `counter-${itemId}`;
};

const getClickInformation = function checkWhereTheClickComesFrom(event) {
  const eventTargetId = event.target.id;
  const eventTargetElement = document.getElementById(eventTargetId);
  //   const eventTargetParent = eventTargetElement.parentElement.parentElement;
  const itemId = getItemId(eventTargetId);
  const itemCountId = getItemCountId(itemId);
  const itemCountElement = document.getElementById(itemCountId);
  const itemOperation = getItemOperation(eventTargetId);
  return { itemCountElement, itemOperation, itemId };
};

export default getClickInformation;
