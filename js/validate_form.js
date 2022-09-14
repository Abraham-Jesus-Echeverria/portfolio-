let $form = document.getElementById("formulario");  
let $inputs = document.querySelectorAll("#formulario input");  

let regularExpresion = { 
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, 
    email: /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
    telefono: /^\d{7,14}$/
} 

// creamos funcion para evaluar los campos seleccionados a traves de su atributo name, este debera ejecutar la funcion que realiza la validacion de los datos, enviando los parametros adecuados segun sea el caso. 

let validarInput = (e) =>{    
    let $input_name = document.querySelector(".input_name"); 
    let $input_phone = document.querySelector(".input_phone"); 
    let $input_email = document.querySelector(".input_email");  
    let $mensaje_err = document.querySelectorAll(".error_mensaje"); 
    let $array_err = [... $mensaje_err];  

    switch (e.target.name) {
        case "full_Name":
            validacion(e.target, $input_name, regularExpresion.nombre, $array_err[0]);  
            break;  

        case "Phone":
            validacion(e.target, $input_phone, regularExpresion.telefono, $array_err[1]); 
            break;  

         case "email":
            validacion(e.target, $input_email, regularExpresion.email, $array_err[2]); 
            break;
    }
}

// en esta funcion realizamos la validacion de los datos con sus respectivas expresiones regulares que recibimos a traves de los parametros.  

let validacion = (input, inputType, regExp, error) => {    

    if(regExp.test(input.value)){ 
        inputType.classList.remove("input_incorrect");  
        error.classList.remove("err_activate");      
    } else { 
        inputType.classList.add("input_incorrect");      
        error.classList.add("err_activate");   
        
    } 
}




// creando eventos para los inputs para cuando escribamos una letra y cuando haya un cambio en el formulario. 
$inputs.forEach((input)=>{ 
input.addEventListener("keyup", validarInput);    
input.addEventListener("change", validarInput); 
});  


$form.addEventListener("submit", (e)=>{ 
    e.preventDefault();  
}); 