/**
 * Caterina Ilario
 * GitHub:
 */

//Asignar funcion sendForm al evento onsubmit
document.getElementById("sendform").onsubmit = () => {
    return validateForm();
}

//Validar todos los campos
const validateForm = () => {
     let name = document.getElementById("name").value;
     let email = document.getElementById("email").value;
     let password = document.getElementById("password").value;

     return validateName(name) && validateLastName(lastname) && validatePassword(password);
}

// Validar nombre no esté vacío
const validateName = name => {
    if (name === ""){
        alert("Las name must be filled out");
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
    
}

const validatePassword = password => {
    if(password.length < 8) {
        alert("The password is invalid!")
        return false;
    }
    return true;
}

const sendForm = () => {
    if (validateForm()){
        return true;
    } else {
        return false;
    }
}
