(()=>{   

    let $P_container= document.querySelector(".presentation_container");  

    let getFunction = async(options)=>{ 
        let {success, url, err} = options 
        const xhr = new XMLHttpRequest(); 

        xhr.addEventListener("load" , ()=>{ 
            let html = xhr.responseText; 

            if(xhr.status >= 200 && xhr.status <= 300 ) { 
                success(html); 
            }else{ 
                let mensaje = xhr.statusText || "lo sentimos ha ocurrido un error"; 
                err(`${xhr.status} ${mensaje}`); 
            } 
        } ); 
        
        xhr.open("GET", url); 
        xhr.setRequestHeader("content-type", "text/html; charset=utf-8");  
        xhr.send(); 
    } 
    
// agregando pagina home por defecto 
    document.addEventListener("DOMContentLoaded", (e)=>{ 
        getFunction({ 
            url: "./home.html",  
            success: (html) => $P_container.innerHTML = html, 
            err: (error) => $P_container.innerHTML = `<h1>${error}</h1>`
        }
        )
    });  
    // cambiando de pagina segun el boton seleccionado 
    document.addEventListener("click", (e)=>{ 
        if(e.target.matches(".nav_item a")){ 
            e.preventDefault();  
            getFunction({ 
                url: e.target.href,  
                success: (html) => $P_container.innerHTML = html, 
                err: (error) => $P_container.innerHTML = `<h1>${err}</h1>`
            
            }); 
        }
    }); 

})(); 