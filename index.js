// Track Role
let userRole = '';

// Handle Role Selection
document.getElementById('userBtn').addEventListener('click', function () {
    userRole = 'user';
    document.getElementById('popup').style.display = 'none';
    document.getElementById('userFormContainer').style.display = 'block';
});

document.getElementById('partnerBtn').addEventListener('click', function () {
    userRole = 'partner';
    document.getElementById('popup').style.display = 'none';
    document.getElementById('partnerFormContainer').style.display = 'block';
});

// Handle User Registration Form Submission
document.getElementById('userForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const userMobile = document.getElementById('userMobile').value;

    if (userMobile.length === 10 && !isNaN(userMobile)) {
        // Mock OTP Send Process
        alert('OTP sent to ' + userMobile);

        // Show the OTP form and hide the registration form
        document.getElementById('userFormContainer').style.display = 'none';
        document.getElementById('otpFormContainer').style.display = 'block';
    } else {
        alert('Please enter a valid 10-digit mobile number.');
    }
});

// Handle Partner Registration Form Submission
document.getElementById('partnerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const partnerName = document.getElementById('partnerName').value;
    const partnerMobile = document.getElementById('partnerMobile').value;
    const shopName = document.getElementById('shopName').value;
    const shopAddress = document.getElementById('shopAddress').value;

    if (partnerMobile.length === 10 && !isNaN(partnerMobile)) {
        // Mock OTP Send Process
        alert('OTP sent to ' + partnerMobile);

        // Show the OTP form and hide the registration form
        document.getElementById('partnerFormContainer').style.display = 'none';
        document.getElementById('otpFormContainer').style.display = 'block';
    } else {
        alert('Please enter a valid 10-digit mobile number.');
    }
});

// Handle OTP Verification Form Submission
document.getElementById('otpForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const otp = document.getElementById('otp').value;

    if (otp.length === 6 && !isNaN(otp)) {
        // Mock OTP Verification
        alert('OTP Verified Successfully!');

        // Redirect to the appropriate dashboard
        if (userRole === 'user') {
            window.location.href ='../user-dashboard/udashboard.html'; // Replace with actual user dashboard page
        } else {
            window.location.href = '../partner-dashboard/p dashboard.html'; // Replace with actual partner dashboard page
        }
    } else {
        alert('Please enter a valid 6-digit OTP.');
    }
});
s