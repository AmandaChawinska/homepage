{
    const welcome = () => {
        console.log("Witam serdecznie");
    }

    const remove = () => {
        const picture = document.querySelector(".js-image");
        const advertisement = document.querySelector(".js-advertisement");
        picture.remove();
        advertisement.innerText = "Reklama zniknęła :)";

    };

    const changeButtonLike = () => {
        const like = document.querySelector(".js-like");
        like.innerText === "Daj lajka 👍" ? like.innerText = "Dziękuje" : like.innerText = "Daj lajka 👍";

    };


    const init = () => {
        const like = document.querySelector(".js-like");
        like.addEventListener("click", changeButtonLike);

        const advertisement = document.querySelector(".js-advertisement");
        advertisement.addEventListener("click", remove);
        welcome();
    };

    init();

}