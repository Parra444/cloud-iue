const load = document.querySelector("#formulario");


function registrarUsuario(e){
event.preventDefault();
        var txtname = document.getElementById('txt-name').value;
        var txtlast = document.getElementById('txt-last').value;
        var txtemail = document.getElementById('txt-correo').value;
        var txtpass = document.getElementById('txt-pss').value;
        var txtbirth = document.getElementById('txt-birth').value;
            let usuario = {
                
                nombre: txtname,
                apellido: txtlast,
                correo: txtemail,
                password: txtpass,
                birth: txtbirth
            }
            console.log(localStorage)
            localStorage.setItem("user", JSON.stringify(usuario))
            limpiarCampos();            
            alert("Usuario registrado exitosamente")

}

function log(e){
    event.preventDefault();

    var username = document.getElementById('txt-user').value;
    var password = document.getElementById('txt-password').value;

    var user = localStorage.getItem("user");
    data = JSON.parse(user);
    console.log(data.correo)

    if(username == data.correo && password == data.password){
        alert("Sesión iniciada")
        window.location.href="/Proyecto_Snackconference/snackconferences.html";
    }
    else{
        alert("Los datos no coinciden")
        limpiarCampos();
    }
}

function limpiarCampos(){
    document.getElementById('txt-name').value="";
    document.getElementById('txt-last').value="";
    document.getElementById('txt-correo').value="";
    document.getElementById('txt-pss').value="";
    document.getElementById('txt-conpss').value="";
    document.getElementById('txt-birth').value="";
}