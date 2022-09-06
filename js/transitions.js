(()=>{ 
    let $headerText = document.querySelectorAll(".header_text");  
    let arrayHeaderText = [...$headerText]; 
    let $rs_container = document.querySelector(".card_rs");  
    let $container_image = document.querySelector(".container_image"); 
    let $nav_ul = document.querySelector(".nav_ul"); 
    

    document.addEventListener("DOMContentLoaded", ()=>{ 
        console.log("se esta disparando el evento"); 
    setTimeout(()=>{ 
        arrayHeaderText[0].classList.add("header_text_transition");  
        arrayHeaderText[1].classList.add("header_text_transition"); 
    },500);  
    setTimeout(()=>{ 
        $rs_container.classList.add("card_rs_transition");
        $container_image.classList.add("container_image_transition"); 
        $nav_ul.classList.add("nav_ul_transition"); 
    },600); 
     

}); 
})(); 

