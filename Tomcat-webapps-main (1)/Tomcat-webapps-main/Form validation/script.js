function submitted(event) {
    event.preventDefault();

    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const phoneInput = document.getElementById('userPhno');
    const ageInput = document.getElementById('userAge');
    const dobInput = document.getElementById('userDob');
    const genderInput = document.getElementById('userGender');

    let isValid = true;

    const showAlert = (message) => {
        alert("👻 BOO! 👻 " + message);
    };

    if (nameInput.value.length > 30 || emailInput.value.length > 30 || dobInput.value.length > 30) {
        showAlert('The shadows whisper... Your inputs should not exceed 30 characters.');
        isValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
        showAlert('The spirits say... Your name should only contain letters and spaces.');
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
        showAlert('That email seems haunted... Please enter a valid one.');
        isValid = false;
    }

    if (phoneInput.value.length !== 10 || !/^\d+$/.test(phoneInput.value)) {
        showAlert('Phone number must be a ghastly 10 digits.');
        isValid = false;
    }

    if (!/^\d+$/.test(ageInput.value) || ageInput.value <= 0) {
        showAlert('Age must be a positive number. Are you a ghost too young to haunt?');
        isValid = false;
    }
    
    if (ageInput.value > 100) {
        showAlert('You must be a spirit from beyond! Age cannot be over 100!');
        isValid = false;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dobInput.value)) {
        showAlert('Date of Rebirth should be in the format YYYY-MM-DD.');
        isValid = false;
    }

    if (isValid) {
        showAlert('The portal accepts your soul... Form submitted successfully!');
    }
}
