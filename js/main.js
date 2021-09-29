

let nombreUsuario = prompt("Ingrese su nombre de usuario")
let contraseña = prompt("Ingrese su contraseña")

if ((nombreUsuario== "javiertutor") && (contraseña = "aprobadisimo")){
    alert ( "¡Bienvenido javiertutor! ¿listo para la pregunta de hoy?")
}
else {
    alert("OUCH! Nombre de usuario incorrecto :(")
}

let anioRevFrancesa = parseInt(prompt("¿En qué año estalló la revolución francesa?"))

if (anioRevFrancesa == 1789) {
    alert("CORRECTO! espero que no lo hayas googleado :/ ")
}

else if (anioRevFrancesa < 1789) {
    alert("mmmm, buen intento, pero todavía no había pasado. El año en que estalló la revolución francesa fue 1789.")
}

else if (anioRevFrancesa > 1789) {
    alert("uy te pasaste. El año en que estalló la revolución francesa fue 1789.")
}
else {
    alert("ERROR: ingresá un número de año válido")
}



