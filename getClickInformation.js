const getItemOperation = function (id) {
  const idSubstringArray = id.split("-", 2);
  const operation = idSubstringArray[1];
  return operation.toString();
};

const getCardId = function (id) {
  const cardId = id.split("-", 1).join();
  return parseInt(cardId);
};

const getClickInformation = function checkWhereTheClickComesFrom(event) {
  const eventTargetId = event.target.id;
  const cardId = getCardId(eventTargetId);
  const itemOperation = getItemOperation(eventTargetId);
  return { cardId, itemOperation };
};

export default getClickInformation;
