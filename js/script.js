const formularioUsuarios = document.querySelector(".formUsuarios")
const usuariosConteinerHTML = document.querySelector("#usuariosContainer")
const titulo = document.querySelector("p")
/* document.getElementsByClassName("inputConteiner") */
/* document.querySelectorAll("inputConteiner") */

const usuarios = []

formularioUsuarios.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log(formularioUsuarios.provincia.value)
    console.log(formularioUsuarios.email.value)
    usuarios.push({
        nombre: formularioUsuarios.nombre.value,
        emial: formularioUsuarios.email.value,
        contrasena: formularioUsuarios.contrasena.value,
        Provincia: formularioUsuarios.provincia.value,
        Edad: formularioUsuarios.edad.value
    })
    titulo.innerHTML =`
        <p>Usuarios registrados: ${usuarios.length} </p>
        `
    usuariosConteinerHTML.innerHTML +=`
        <div class="usuariosContainer">
            <div class="usuario">
                    <h2>Nombre: ${nombre.value} </h2>
                    <p>Email: ${email.value} </p>
                    <p>Edad: ${edad.value} </p>
                    <p>Contraseña: ${contrasena.value} </p>
                    <p>Provincia: ${provincia.value} </p>
            </div>
        </div>
        `
    console.log(usuarios)
    /* scroll(0, 100 * usuarios.length); para mover el scroll */
})

///para limpiar el div contenedor de los usuarios
formularioUsuarios.addEventListener("reset", (event) =>{
    /* event.preventDefault() */
    usuarios.splice(-usuarios.length) ///este sirve para eliminar la cantidad de elementos indicados de un array
    /* usuarios.pop(); este sirve para eliminar el ultimo elemento de un array */
    usuariosConteinerHTML.innerHTML ="";
    console.log(usuarios)
    titulo.innerHTML =`
        <p>Usuarios registrados: ${usuarios.length} </p>
        `
    /* document.getElementById("usuariosContainer").remove(); esto elimina el elemento hasta recargar*/
})
