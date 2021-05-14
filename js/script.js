{
    const welcome = () => {
        console.log("Witam serdecznie");
    }

    const removeButton = () => {
        const picture = document.querySelector(".js-image");
        const advertisement = document.querySelector(".js-advertisement");
        picture.remove();
        advertisement.innerText = "Reklama zniknęła :)";

    };

    const changeTextButton = () => {
        const like = document.querySelector(".js-like");
        like.innerText === "Daj lajka 👍" ? like.innerText = "Dziękuje" : like.innerText = "Daj lajka 👍";

    };


    const init = () => {
        const like = document.querySelector(".js-like");
        like.addEventListener("click", changeTextButton);

        const advertisement = document.querySelector(".js-advertisement");
        advertisement.addEventListener("click", removeButton);
        welcome();
    };

    init();

}