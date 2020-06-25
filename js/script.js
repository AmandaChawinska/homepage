console.log("Witam serdecznie");

let przycisk = document.querySelector(".advertisement");
let pic = document.querySelector(".image__pic")

przycisk.addEventListener("click", () => {
    pic.remove();
    przycisk.innerText = "Reklama zniknęła :)";

})



let like = document.querySelector(".like");

like.addEventListener("click", () => {

    if (like.innerText === "Daj lajka") {
        like.innerText = "Dziękuje";
    } else {
        like.innerText = "Daj lajka";
    }


})