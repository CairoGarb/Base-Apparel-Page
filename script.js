const form = document.getElementById('form');
const emailInput = document.getElementById('email');

// Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});

// Function to validate the form/input
function validateInput() {
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
        setError(emailInput, 'Provide a valid email'); 
    } else if (!isValidEmail(emailValue)){
        setError(emailInput, 'Provide a valid email'); 
    } else {
        setSuccess(emailInput);
    }
}

// Function to show the Error message
function setError(input, message) {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.error-msg');

    errorDisplay.innerText = message;

    inputControl.className = 'input-control error'
}

// Function to show the Success message
function setSuccess(input) {
    const inputControl = input.parentElement;
    inputControl.className = 'input-control success'
}

// Variable to see if email is valid
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}