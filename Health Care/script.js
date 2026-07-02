// ==========================================
// MediCare Plus Hospital
// script.js
// Appointment Form Validation
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Get Appointment Form
    const form = document.getElementById("appointmentForm");

    // Run only if the form exists
    if (form) {

        form.addEventListener("submit", function (event) {

            // Stop form submission
            event.preventDefault();

            // Get input values
            let name = document.getElementById("name").value.trim();
            let age = document.getElementById("age").value.trim();
            let gender = document.getElementById("gender").value;
            let phone = document.getElementById("phone").value.trim();
            let email = document.getElementById("email").value.trim();
            let department = document.getElementById("department").value;
            let date = document.getElementById("date").value;
            let message = document.getElementById("message").value.trim();

            // Name Validation
            if (name === "") {
                alert("Please enter your full name.");
                return;
            }

            // Age Validation
            if (age === "" || age < 1 || age > 120) {
                alert("Please enter a valid age.");
                return;
            }

            // Gender Validation
            if (gender === "") {
                alert("Please select your gender.");
                return;
            }

            // Phone Validation (10 digits)
            let phonePattern = /^[0-9]{10}$/;

            if (!phonePattern.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            // Email Validation
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Department Validation
            if (department === "") {
                alert("Please select a department.");
                return;
            }

            // Date Validation
            if (date === "") {
                alert("Please select an appointment date.");
                return;
            }

            // Message Validation
            if (message === "") {
                alert("Please enter your health issue.");
                return;
            }

            // Success Message
            alert(
                "Appointment Booked Successfully!\n\n" +
                "Patient Name: " + name +
                "\nDepartment: " + department +
                "\nAppointment Date: " + date +
                "\n\nThank you for choosing MediCare Plus Hospital."
            );

            // Reset Form
            form.reset();

        });

    }

});

// ==========================================
// Welcome Message
// ==========================================

console.log("Welcome to MediCare Plus Hospital Website");

// ==========================================
// Smooth Scroll for Internal Links
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});