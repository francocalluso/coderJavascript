

let nombreUsuario = prompt("Ingrese su nombre de usuario")
let contraseña = prompt("Ingrese su contraseña")

if ((nombreUsuario== "javiertutor") && (contraseña = "aprobadisimo")){
    alert ( "¡Bienvenido javiertutor! ¿listo para la pregunta de hoy?")
    for (let i = 1 ; i <= 3; i++) {
        let anioRevFrancesa = parseInt(prompt("¿En qué año estalló la revolución francesa?"))
        let intentosRestantes = 3-i

        if (anioRevFrancesa == 1789) {
            alert("CORRECTO! espero que no lo hayas googleado :/ ");
            break;

        } else if (intentosRestantes == 0){
            alert ( "Lo siento, te quedaste sin intentos. Mejor suerte la próxima");
            break;
        } else if (anioRevFrancesa < 1789){
            alert ("Mmm buen intento, pero no, todavía no había sucedido. Te quedan " + intentosRestantes + " intentos.") 
        } else if (anioRevFrancesa > 1789){
            alert ("Te pasaste amigo, te quedan " + intentosRestantes + " intentos.")
        } else {
            alert ("ERROR, ingresa un número válido. Te quedan "+ intentosRestantes + " intentos")
        }
        
        
    }
    
} else {
    alert("OUCH! Nombre de usuario incorrecto :(")
    }





