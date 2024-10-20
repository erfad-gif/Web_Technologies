function validateAgeAndGender(event) {
    var age = document.getElementById('Age').value;
    var gender = document.getElementById('country').value;

    if (age < 1 || age > 100) {
        spookyAlert('Age must be between 1 and 100.');
        event.preventDefault();  
        return false;
    }

    if (gender !== "Male" && gender !== "Female") {
        spookyAlert('Please select a valid gender (Male or Female).');
        event.preventDefault();  
        return false;
    }

    return true;
}

function validateFoodSelection(event) {
    var checkboxes = document.querySelectorAll('input[name="food"]');
    var maxSelection = 5; 
    var minSelection = 1;
    var checkedCount = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCount++;
        }
    }

    if (checkedCount < minSelection) {
        spookyAlert('You must select at least one food item.');
        event.preventDefault();  
        return false;
    }

    if (checkedCount > maxSelection) {
        spookyAlert('You can only select up to 5 food items.');
        event.preventDefault();  
        return false;
    }

    return true;
}

function spookyAlert(message) {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'spooky-alert';
    alertDiv.innerText = message;

    document.body.appendChild(alertDiv);

    setTimeout(function () {
        alertDiv.style.opacity = 0;
        setTimeout(function () {
            alertDiv.remove();
        }, 1000);
    }, 3000);
}

var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
    } else if (!validateAgeAndGender(event) || !validateFoodSelection(event)) {
        event.preventDefault();  
    }
});
