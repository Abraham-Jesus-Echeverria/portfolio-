(()=>{ 
    let $imgLogo = document.querySelector(".header__img"); 
    let $textHeader = document.querySelectorAll(".header_text"); 
    let arrayHeaderText = [...$textHeader]; 
    console.log(arrayHeaderText[0]);     

    document.addEventListener("DOMContentLoaded", ()=>{   
        setTimeout(()=>{ 
            arrayHeaderText[0].classList.add("header_text_transition");  
            arrayHeaderText[1].classList.add("header_text_transition"); 
        },1500)
        }); 
})(); 

