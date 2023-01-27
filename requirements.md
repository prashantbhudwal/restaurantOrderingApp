Design : https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?node-id=0%3A1

# Requirements

## Order Page

- Has a Header
  - Title
  - Subtitle
- Food Items rendered using Js from data.js
- Items added to Order Cart with + button.
- When + is clicked
  - The [Order_Cart_Component] appears as div at th bottom of the page.
- When Order value goes over a certain value, give user a discount.

### [Order_Cart_Component]

- Heading
- Each item
  - Item Name
  - Remove Option
  - Price
- Total Price
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
