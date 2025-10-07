// Step 1: Define the function
function checkAnswer() {
    // Step 2: Define the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    // Step 4: Handle no selection
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#dc3545"; // red
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 5: Compare answers
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // green
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // red
    }
}

// Step 6: Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);