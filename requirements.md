Design : https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?node-id=0%3A1

# Requirements

## Basics

- It is just one page app for ordering food.
- It is only for mobile and is non responsive.
  - However should stay usable on bigger screens.

## Order Page

[headerComonent]

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
  - When clicked, opens [payementModal]

### [payementModal]

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
