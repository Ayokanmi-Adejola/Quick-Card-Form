# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

| Desktop | Mobile |
| ------- | ------ |
| <img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/64814388-89bd-4677-a143-9ad39126c97b" /> | <img width="375" height="704" alt="image" src="https://github.com/user-attachments/assets/87bde8eb-0e56-49a6-8434-a09678ce0755" /> |


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

## Features

- Real-time card details update as the user types
- Form validation with error messages
- Responsive design for mobile, tablet, and desktop views
- Interactive form elements with hover and focus states
- Completed state after successful form submission


## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

## Implementation Details

### HTML Structure
- Responsive layout with card preview and form sections
- Semantic form elements with proper labels and error message containers
- Completion state that shows after successful form submission

### CSS Styling
- Implemented according to the style guide (colors, typography, etc.)
- Responsive layouts for mobile, tablet, and desktop views
- Custom styling for form elements, error states, and buttons
- Used the provided background images and card designs

### JavaScript Functionality
- Real-time card preview updates as the user types
- Form validation with appropriate error messages
- Form submission logic to switch between form and completion states
- Input formatting for the card number (spaces after every 4 digits)
- Validation for expiry date and CVC

## What I Learned

This project was a great opportunity to enhance my front-end development skills. Here are some key learnings:

```html
<!-- Using proper semantic HTML structure for forms -->
<div class="form-group">
  <label for="card-name">Cardholder Name</label>
  <input type="text" id="card-name" placeholder="e.g. Jane Appleseed" required>
  <div class="error-message" id="name-error"></div>
</div>
```

```css
/* Creating a gradient border on focus */
input:focus {
  outline: none;
  border-image: linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1;
}

/* Styling error states */
input.error {
  border-color: var(--red);
}
```

```js
// Real-time card preview updates
cardNumberInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/[^0-9]/g, '');

  // Format with spaces every 4 digits
  if (value.length > 0) {
    value = formatCardNumber(value);
    e.target.value = value;
  }

  cardNumberDisplay.textContent = value || '0000 0000 0000 0000';
});
```

Key skills improved:
- Creating responsive layouts using CSS Flexbox
- Implementing mobile-first design approach
- Writing clean, maintainable JavaScript for form validation
- Using CSS custom properties for consistent theming
- Handling different form states and user interactions
- Implementing real-time UI updates based on user input
- Creating proper form validation with meaningful error messages
- Using media queries effectively for responsive design

## Useful Resources

- [MDN Web Docs: Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This helped me understand how to implement proper form validation techniques.
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This is an amazing article that helped me understand Flexbox layout.
- [JavaScript Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) - This resource was invaluable for creating the card number formatting function.
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - This helped me implement a consistent color scheme throughout the project.
- [CSS-Tricks: A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/) - This guide helped me create responsive layouts for different screen sizes.

## Future Improvements

- Add animation for smoother transitions between states
- Implement more advanced card number validation (Luhn algorithm)
- Add accessibility features for screen readers
- Optimize performance for slower devices
- Implement autofocus on the first form field when the page loads
- Add keyboard navigation support for better accessibility
