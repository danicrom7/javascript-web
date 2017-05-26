
function pass(){
domPass1 =document.querySelector("#pass1")
domPass2 = document.querySelector("#pass2")


if (domPass1.value != domPass2.value) {
    console.log(msg= "Las contraseñas no son iguales")
} else{
    console.log(msg="contraseñas correctas")
}

};


document.querySelector("#btn").addEventListener("click",pass);
