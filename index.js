import foodItemsArray from "./data.js";

const cardContainerElement = document.getElementById("foodCardsContainer");

console.log(cardContainerElement);

const getCardHtml = function getCardHtml(item) {
  const { name, ingredients, id, price, imgName, description } = item;

  return /*HTML*/ `<div class="card-wrapper" id="card-${id}">
        <div class="hero-section-wrapper">
          <div class="hero-image-wrapper">
            <img src="./img/${imgName}" class="item-hero-img" alt="item-hero-image" />
          </div>
        </div>
        <div class="card-content-wrapper">
          <div class="item-title"><span>${name}</span></div>
          <div class="item-description">
            <span>${description}</span>
          </div>
          <div class="item-price">$${price}</div>
        </div>
        <div class="card-actions-wrapper">
          <div class="action-buttons-wrapper">
            <div class="icon-wrapper">
              <span class="typcn typcn-minus icon"></span>
            </div>
            <div class="item-counter-wrapper">
              <span class="counter">0</span>
            </div>
            <div class="icon-wrapper">
              <span class="typcn typcn-plus icon"></span>
            </div>
          </div>
        </div>
      </div>`;
};

const getCards = function (foodItemsArray) {
  const cardsArray = foodItemsArray.map((item) => getCardHtml(item));
  return cardsArray.join("");
};

const renderCards = function renderFoodItemCardsFromArray() {
  cardContainerElement.innerHTML = getCards(foodItemsArray);
};

renderCards();