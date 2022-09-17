(()=>{  
    let $buttonHome = document.getElementById("buttonHome"); 
    let $buttonContact = document.getElementById("buttonContact"); 
    let $buttonAbout = document.getElementById("buttonAbout");  
    let $indexContaier = document.getElementById("Home"); 
    let $contactContainer = document.getElementById("Contact"); 
    let $aboutContainer = document.getElementById("aboutMe"); 

    $buttonHome.addEventListener("click", (e)=>{ 
        e.preventDefault(); 
        $indexContaier.classList.remove("index_container_activate"); 
        $contactContainer.classList.remove("presentation_container_contact_activate");
        $aboutContainer.classList.remove("about_container_activate");
    }); 
    $buttonContact.addEventListener("click", (e)=>{  
        e.preventDefault();  
        $indexContaier.classList.add("index_container_activate"); 
        $contactContainer.classList.add("presentation_container_contact_activate");  
        $aboutContainer.classList.remove("about_container_activate");


    }); 
    $buttonAbout.addEventListener("click", (e)=>{ 
        e.preventDefault(); 
        $aboutContainer.classList.add("about_container_activate");  
        $indexContaier.classList.add("index_container_activate"); 
        $contactContainer.classList.remove("presentation_container_contact_activate");
    });

})();