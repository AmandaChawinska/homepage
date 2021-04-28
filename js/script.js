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

    const init = () => {
        const advertisement = document.querySelector(".js-advertisement");
        advertisement.addEventListener("click", remove)
        welcome();
    };

    init();


    {
        const changebuttonlike = () => {
            if (like.innerText === "Daj lajka 👍") {
                like.innerText = "Dziękuje";
            } else {
                like.innerText = "Daj lajka 👍";
            }
        };

        

        const like = document.querySelector(".js-like");
        like.addEventListener("click", changebuttonlike);

    }


}