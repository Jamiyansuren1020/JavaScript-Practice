const buttonHas = document.getElementById("press-button");

    buttonHas.addEventListener("click", () => {
        console.log("Button has been clicked");
        buttonHas.innerHTML = 'clicked'
    })