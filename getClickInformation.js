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

const getCardId = function (id) {
  const cardId = id.split("-", 1).join();
  return parseInt(cardId);
};

const getClickInformation = function checkWhereTheClickComesFrom(event) {
  const eventTargetId = event.target.id;
  const itemId = getCardId(eventTargetId);
  const itemOperation = getItemOperation(eventTargetId);
  return { itemId, itemOperation };
};

export default getClickInformation;
