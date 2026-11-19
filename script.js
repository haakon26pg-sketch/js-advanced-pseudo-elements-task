const cookieButton = document.querySelector("#action-button");

cookieButton.addEventListener("click", () => {
    cookieButton.textContent = "🍪 You've been cookie'd!";
    cookieButton.style.backgroundColor = "green";
});