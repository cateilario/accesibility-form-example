/**
 * Caterina Ilario
 * GitHub:
 */


//Validar todos los campos
const validateForm = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

     return validateName(name) && validateLastName(lastname) && validatePassword(password);
}

// Validar nombre no esté vacío
const validateName = name => {
    if (name === ""){
        alert("Name must be filled out");
        return false;
    }
    return true;
}

//Validar que el apellido no esté vacío
const validateLastName = lastname => {
    if (lastname === ""){
        alert("Invalid last name!");
        return false;
    }
    return true;
}

const validateEmail = email => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(email)) {
        alert("La dirección de correo electrónico no es válida.");
        return false;
    }
    return true;
}

const validatePassword = password => {
    if(password.length < 8) {
        alert("The password is invalid!")
        return false;
    }
    return true;
}

//Asignar funcion sendForm al evento onsubmit
document.getElementById("sendform").onsubmit = () => {
    return validateForm();
}

//Enviar formulario si todos los campos son válidos
const sendForm = () => {
    if (validateForm()){
        return true; // form se envía
    } else {
        return false; // evita que form se envíe si la validación falla
    }
}