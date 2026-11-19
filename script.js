
// add functionality to the button. goal is to give the user cookies when clicked
const cookieButton = document.querySelector("#action-button");

cookieButton.addEventListener("click", () => {
    cookieButton.textContent = "🍪 You've been cookie'd!";
    cookieButton.style.backgroundColor = "green";
});