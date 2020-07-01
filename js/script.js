{
    const welcome = () => {
        console.log("Witam serdecznie");
    }
    
    const remove = () =>  {
        const pic = document.querySelector(".image__pic");
        const przycisk = document.querySelector(".advertisement");
        pic.remove();
        przycisk.innerText = "Reklama zniknęła :)";
        
    };

    const init = () =>{
        const przycisk = document.querySelector(".advertisement");
        przycisk.addEventListener("click", remove)
        welcome();
       };
        
    init ();
    
 
    {
        const changebuttonlike = () => {
            if (like.innerText === "Daj lajka") {
                like.innerText = "Dziękuje";
            } else {
                like.innerText = "Daj lajka";
            }
        };
        const like = document.querySelector(".like");
        like.addEventListener("click", changebuttonlike);
       
    }
    
   
}