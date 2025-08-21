document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    alert("Thank you! Your response has been submitted ✅");

    // Reset form after submission
    document.getElementById("surveyForm").reset();
});
