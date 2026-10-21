const learningButton = document.querySelector("#learning-button");

const learningMessage = document.querySelector("#learning-message");


function changeLearningMessage() {
    if (learningMessage.textContent ===
        "Click the button to learn a fun fact from Software Systems!") {

        learningMessage.textContent =
            "JavaScript is a popular programming language used to make websites interactive and dynamic.";

    } else {
        learningMessage.textContent =
            "Click the button to learn a fun fact from Software Systems!";
    }
}
learningButton.addEventListener("click", changeLearningMessage);