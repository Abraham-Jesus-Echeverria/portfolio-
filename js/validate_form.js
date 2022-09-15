let $form = document.getElementById("formulario");  
let $inputs = document.querySelectorAll("#formulario input");  
let $textArea = document.getElementById("textarea"); 

let regularExpresion = { 
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, 
    email: /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
    telefono: /^\d{7,14}$/, 
    textArea: /^.{0,200}$/
}  
let campos = { 
    nombre: false, 
    email: false, 
    telefono: false, 
    textArea:true, 
}

// creamos funcion para evaluar los campos seleccionados a traves de su atributo name, este debera ejecutar la funcion que realiza la validacion de los datos, enviando los parametros adecuados segun sea el caso. 
let $mensaje_err = document.querySelectorAll(".error_mensaje"); 
let $array_err = [... $mensaje_err];  

let validarInput = (e) =>{     
let $input_name = document.querySelector(".input_name"); 
let $input_phone = document.querySelector(".input_phone"); 
let $input_email = document.querySelector(".input_email");  

    switch (e.target.name) {
        case "full_Name":
            validacion(e.target, $input_name, regularExpresion.nombre, $array_err[0], "nombre");  
            break;  

        case "Phone":
            validacion(e.target, $input_phone, regularExpresion.telefono, $array_err[1], "telefono"); 
            break;  

         case "email":
            validacion(e.target, $input_email, regularExpresion.email, $array_err[2], "email");  
            break;
    }
}

// en esta funcion realizamos la validacion de los datos con sus respectivas expresiones regulares que recibimos a traves de los parametros.  

let validacion = (input, inputType, regExp, error, campo) => {    

    if(regExp.test(input.value)){ 
        inputType.classList.remove("input_incorrect");  
        error.classList.remove("err_activate");  
        campos[campo] = true;       
    } else { 
        inputType.classList.add("input_incorrect");      
        error.classList.add("err_activate");   
        campos[campo] = false;   
    } 
}

// creando eventos para los inputs para cuando escribamos una letra y cuando haya un cambio en el formulario. 
$inputs.forEach((input)=>{ 
input.addEventListener("keyup", validarInput);    
input.addEventListener("change", validarInput); 
});  

// ---------------------------------validando_textarea------------------------------

let validarTextarea = () =>{ 
    if(regularExpresion.textArea.test($textArea.value)){ 
        campos["textArea"] = true;  
        $textArea.classList.remove("input_incorrect");  
        document.querySelectorAll(".error_mensaje")[3].classList.remove("err_activate"); 
    }else{ 
        $textArea.classList.add("input_incorrect");      
        document.querySelectorAll(".error_mensaje")[3].classList.add("err_activate");  
        campos["textArea"] = false;  
    }
}
$textArea.addEventListener("keyup", validarTextarea); 
$textArea.addEventListener("change", validarTextarea);   
// -------------------------------------------------------------------------------------

// creando funcion para validar el envio del formulario: 
let $succes_mensaje = document.getElementById("suceesMensage"); 
let submitValidation = (mensaje, color)=>{ 
    $succes_mensaje.textContent = mensaje; 
    $succes_mensaje.classList.add("mensaje_succes_activate"); 
    $succes_mensaje.style.color = color;    
    setTimeout(() => {
        $succes_mensaje.classList.remove("mensaje_succes_activate"); 
        $succes_mensaje.textContent = ""; 
    }, 2000);  
} 

// creando evento para enviar el formulario segun las validaciones 
$form.addEventListener("submit", (e)=>{ 
    e.preventDefault();  
    if(campos.nombre && campos.telefono && campos.email && campos.textArea){ 
        $form.reset();   
        for (const camp in campos) { 
            if(camp != "textArea") campos[camp] = false; 
        }
        submitValidation("¡El formulario ha sido enviado exitosamente!", "#0f0" ); 
           
    } else{   
        submitValidation("porfavor rellena adecuadamente el formulario", "#f00" ); 
    }
    
});   




// for (const campo in campos) { 
//     if(campos.campo != campos.textArea){  
//    campos.campo = false;   
//     }
//     console.log(campos.campo); 
//     };  


 


  
