## Probable Steps

    1. Create & Header component
    2. Create & Style FoodItem
    3. Manually Display 3 Food Items
    4. Render One FoodItem Using Js
    5. Write a function to render 3 foodItems
    6. Create & Style OrderCart Component
    7. Create & Style Ratings Component
       1. Add it temporarily under the orderCart
    8. Create & Style Modal Component
       1. Temporarily display it under the Rating Component
       2. Validate Modal Component
    9.  Display OrderCart on clicking Plus
    10. Display Modal on clicking Place Order
    11. Hide Modal, and Show Ratings Components at the place of OrderCart Component

## Style Estimates

- The main page will have 3 containers that will be arranged with flexbox.
  - One for header
  - One for Items
    - To hold Item divs
  - One for Checkout
    - To conditionally hold
      - Nothing: Pre Checkout
      - OrderCart: During Checkout
      - Ratings: Post Checkout
- The Modal Will be a separate container that will overlay on the app.
  - It will also be flexbox based.

## Logic Estimates

- function --> renderItems
- function --> renderCart
- function --> getCartValue
- function --> calculateDiscount
- function --> modalController
- function --> renderRatings
- function --> getFeedbackMessage
- function --> renderFeedback
