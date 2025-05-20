// DOM Elements
const cardForm = document.getElementById('card-form');
const cardNumberDisplay = document.querySelector('.card-number-display');
const cardNameDisplay = document.querySelector('.card-name-display');
const cardDateDisplay = document.querySelector('.card-date-display');
const cardCvcDisplay = document.querySelector('.card-cvc-display');

const cardNameInput = document.getElementById('card-name');
const cardNumberInput = document.getElementById('card-number');
const expiryMonthInput = document.getElementById('expiry-month');
const expiryYearInput = document.getElementById('expiry-year');
const cardCvcInput = document.getElementById('card-cvc');

const nameError = document.getElementById('name-error');
const numberError = document.getElementById('number-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error');
const cvcError = document.getElementById('cvc-error');

const formContainer = document.querySelector('.form-container');
const completedState = document.querySelector('.completed-state');
const continueButton = document.querySelector('.continue-button');

// Format card number with spaces
function formatCardNumber(value) {
  return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
}

// Update card display in real-time
cardNameInput.addEventListener('input', (e) => {
  const value = e.target.value || 'Ayokanmi Adejola';
  cardNameDisplay.textContent = value;
});

cardNumberInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/[^0-9]/g, '');

  // Format with spaces every 4 digits
  if (value.length > 0) {
    value = formatCardNumber(value);
    e.target.value = value;
  }

  cardNumberDisplay.textContent = value || '0000 0000 0000 0000';
});

expiryMonthInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/[^0-9]/g, '');

  // Ensure month is between 1-12
  if (value.length === 1 && parseInt(value) > 1) {
    value = '0' + value;
  }

  if (value.length === 2 && parseInt(value) > 12) {
    value = '12';
  }

  e.target.value = value;
  updateExpiryDate();
});

expiryYearInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/[^0-9]/g, '');
  e.target.value = value;
  updateExpiryDate();
});

cardCvcInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/[^0-9]/g, '');
  e.target.value = value;
  cardCvcDisplay.textContent = value || '000';
});

function updateExpiryDate() {
  const month = expiryMonthInput.value || '00';
  const year = expiryYearInput.value || '00';
  cardDateDisplay.textContent = `${month}/${year}`;
}

// Form validation
function validateForm() {
  let isValid = true;

  // Validate name
  if (!cardNameInput.value.trim()) {
    nameError.textContent = "Can't be blank";
    cardNameInput.classList.add('error');
    isValid = false;
  } else {
    nameError.textContent = '';
    cardNameInput.classList.remove('error');
  }

  // Validate card number
  const cardNumber = cardNumberInput.value.replace(/\s/g, '');
  if (!cardNumber) {
    numberError.textContent = "Can't be blank";
    cardNumberInput.classList.add('error');
    isValid = false;
  } else if (cardNumber.length < 16) {
    numberError.textContent = "Card number must be 16 digits";
    cardNumberInput.classList.add('error');
    isValid = false;
  } else if (!/^\d+$/.test(cardNumber)) {
    numberError.textContent = "Wrong format, numbers only";
    cardNumberInput.classList.add('error');
    isValid = false;
  } else {
    numberError.textContent = '';
    cardNumberInput.classList.remove('error');
  }

  // Validate expiry month
  if (!expiryMonthInput.value) {
    monthError.textContent = "Can't be blank";
    expiryMonthInput.classList.add('error');
    isValid = false;
  } else if (parseInt(expiryMonthInput.value) < 1 || parseInt(expiryMonthInput.value) > 12) {
    monthError.textContent = "Must be between 1-12";
    expiryMonthInput.classList.add('error');
    isValid = false;
  } else {
    monthError.textContent = '';
    expiryMonthInput.classList.remove('error');
  }

  // Validate expiry year
  if (!expiryYearInput.value) {
    yearError.textContent = "Can't be blank";
    expiryYearInput.classList.add('error');
    isValid = false;
  } else if (expiryYearInput.value.length < 2) {
    yearError.textContent = "Must be 2 digits";
    expiryYearInput.classList.add('error');
    isValid = false;
  } else {
    yearError.textContent = '';
    expiryYearInput.classList.remove('error');
  }

  // Validate CVC
  if (!cardCvcInput.value) {
    cvcError.textContent = "Can't be blank";
    cardCvcInput.classList.add('error');
    isValid = false;
  } else if (cardCvcInput.value.length < 3) {
    cvcError.textContent = "Must be 3 digits";
    cardCvcInput.classList.add('error');
    isValid = false;
  } else {
    cvcError.textContent = '';
    cardCvcInput.classList.remove('error');
  }

  return isValid;
}

// Form submission
cardForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm()) {
    // Show completed state
    formContainer.style.display = 'none';
    completedState.style.display = 'block';
  }
});

// Continue button
continueButton.addEventListener('click', () => {
  // Reset form and go back to initial state
  cardForm.reset();
  cardNumberDisplay.textContent = '0000 0000 0000 0000';
  cardNameDisplay.textContent = 'Ayokanmi Adejola';
  cardDateDisplay.textContent = '00/00';
  cardCvcDisplay.textContent = '000';

  completedState.style.display = 'none';
  formContainer.style.display = 'block';
});
