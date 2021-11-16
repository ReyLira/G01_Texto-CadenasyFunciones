function colocar_titulo(id,titulo){
    var elemento_lista= document.getElementById(id)
    elemento_lista.textContent= titulo   
}
colocar_titulo("arrozconpollo","Arroz con Pollo")
colocar_titulo("sopaseca","Sopa Seca")