function aleatorio(min, max) {
    return Math.floor ( Math.random() * (max - min + 1) + min)
   }
   //1 es piedra, 2 papel, 3 tijera
   let jugador = 0 
   let victorias = 0
   let derrotas = 0 

   
   let pc = aleatorio (1, 3)


    function eleccion(jugada) {
        let resultado = ""
        if(jugada == 1) resultado = " 💎"
        else if(jugada == 2) resultado = " 🧻"
        else if(jugada == 3) resultado = " ✂"
        else resultado = "tienes que seleccionar una opcion valida"
        return resultado
        }
        
        while(victorias < 3 && derrotas < 3) {
        let pc = aleatorio (1, 3)
            jugador = prompt("Elige: 1 piedra💎, 2 papel🧻, 3 tijera✂") 
            alert("PC elige: " + eleccion(pc))
            alert("Tu eliges: " + eleccion(jugador))


        //ganador / perdedor
        if(pc == jugador)  
            {alert("Empate")}
        else if (jugador == 1 && pc == 2) 
            {alert("Perdiste")
            derrotas = derrotas + 1} 
        else if (jugador == 1 && pc == 3) 
            {alert("Ganaste")
            victorias = victorias + 1}
        else if (jugador == 2 && pc == 3) 
            {alert("Perdiste")
            derrotas = derrotas + 1}
        else if (jugador == 2 && pc == 1) 
            {alert("Ganaste")
            victorias = victorias + 1}
        else if (jugador == 3 && pc == 1) 
            {alert("Perdiste")
            derrotas = derrotas + 1}
        else if (jugador == 3 && pc == 2) 
            {alert("Ganaste") 
            victorias = victorias + 1}
        }
            alert("Ganaste " + victorias + " veces. Perdiste " + derrotas + " veces.")

        let answer = confirm("Quieres volver a jugar miamor?")
        if(answer == true) window.location.reload()
        else alert("entonces abrite xd")