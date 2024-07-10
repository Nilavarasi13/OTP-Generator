//Define the length of the OTP
function generateFancyOTP(length = 4) {
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let otp = '';

// To Generate OTP of the specified length
    for (let i = 0; i < length; i++) { 
        const random = Math.floor(Math.random() * characters.length);
        otp += characters[random];
    }
    return otp;
}

// to display the generated OTP
function displayOTP() {
    const otp = generateFancyOTP();
    const otpDisplay = document.getElementById('otpDisplay');
    otpDisplay.textContent = otp;
}

// Adding Event listener for the button
document.getElementById('generateButton')
.addEventListener('click', displayOTP);

