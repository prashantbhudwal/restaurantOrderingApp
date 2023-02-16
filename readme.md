This is a solo frontend project where I build a simple food ordering application with html, css and javascript.

No external libraries or frameworks are used.

This was the base design provided by Scrimba: https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?node-id=0%3A1

However, I didn't like it much and I decided to refactor it completely. I haven't used figma for the new design, all of it is made from scratch, directly in CSS.

## Known Issues

- Action icons behavior is buggy.
- Remove action buttons are too big.
- Placeholder & Text color of the form is not visible.
- The app container padding is too much.

# Requirements

Design : https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?node-id=0%3A1

# Requirements

## Basics

- It is just one page app for ordering food.
- It is only for mobile and is non responsive.
  - However should stay usable on bigger screens.

## Order Page

[headerComponent]

- Title
- Subtitle

### [menuComponent]

- has list of [foodItem] components.

### [foodItem]

- Each foodItem is rendered wih Js from data.js
- Each foodItem has
  - name
  - major ingredients
  - price
  - - button
- Items added to [Order_Cart_Component] with + button.
  - When + is clicked
  - The [Order_Cart_Component] appears as div at th bottom of the page.

### [Order_Cart_Component]

- Heading
- Each item
  - Item Name
  - Remove Option
  - Price
- Total Price
  - When Total Price goes over a certain value, give user a 15% discount.
- Complete Order Button
  - When clicked, opens [paymentModal]

### [paymentModal]

- Enter Cart Details into form
  - Name
  - Card Number
  - CVV
- All fields are required
- Pay Button
  - When Clicked replaces [Order_Cart_Component] with [ratingsComponent]

### [ratingsComponent]

- Thanks Message
- Star Rating
  - Display message based on the rating


# Plan
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
