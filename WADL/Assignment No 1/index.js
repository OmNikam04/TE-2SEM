function validateForm() {
    // Validation logic
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let birthDate = document.getElementById('birthDate').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let streetAddress = document.getElementById('streetAddress').value;
    let streetAddress2 = document.getElementById('streetAddress2').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let region = document.getElementById('region').value;
    let postalCode = document.getElementById('postalCode').value;
  
    // Custom error messages
    let fullNameError = document.getElementById('fullNameError');
    let emailError = document.getElementById('emailError');
    let phoneNumberError = document.getElementById('phoneNumberError');
    let birthDateError = document.getElementById('birthDateError');
  
    // Reset error messages
    fullNameError.textContent = '';
    emailError.textContent = '';
    phoneNumberError.textContent = '';
    birthDateError.textContent = '';
  
    // Check individual validations and display error messages
    if (fullName.trim() === '') {
      fullNameError.textContent = 'Please enter your full name.';
      return;
    }
  
    // Add email validation
    if (!isValidEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      return;
    }
  
    // Add phone number validation
    if (isNaN(phoneNumber) || phoneNumber.length !== 10) {
      phoneNumberError.textContent = 'Please enter a valid phone number.';
      return;
    }
  
    // Add birth date validation
    let birthYear = new Date(birthDate).getFullYear();
    if (birthYear > 2004) {
      birthDateError.textContent = 'Birth year must be 2004 or earlier.';
      return;
    }
  
    // ... (add similar validations for other fields) ...
  
    // Create a JSON object
    let formData = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      gender: gender,
      address: {
        streetAddress: streetAddress,
        streetAddress2: streetAddress2,
        country: country,
        city: city,
        region: region,
        postalCode: postalCode
      }
    };
  
    // Log or send formData to the server/database as needed
    console.log(formData);
    // You can send formData to the server using an AJAX request or any other method.
  
    // Additional logic or redirection can be added here
  }
  
  // Additional function for email validation
  function isValidEmail(email) {
    // You can implement a more sophisticated email validation if needed
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  