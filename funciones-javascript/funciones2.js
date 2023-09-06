//funciones
//Programa para hacer limonada
function exprimirLimones(cantidad){
    console.log("Exprimiendo" + cantidad + "Limones.");
    let jugoExtraido = cantidad *10 //Considerando obtener 10 ml de jugo por cada limon
    console.log ("Se obtuvo "+ jugoExtraido + "ml de jugo de limon.");
    return jugoExtraido; //return
}

//Funcion para mezclar el jugo de limon con agua y azucar
function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar) {
    console.log ("Mezclando " + cantidadDeJugo + "ml de jugo de limon con " + cantidadDeAgua + "ml de agua y " + cantidadDeAzucar + "gramos de azucar");
}
//Funcion para servir Limonada
function servirLimonada () {
    console.log ("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
}
//Funcion principal que prepara mi limonada
function prepararLimonada(cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones (cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); //Cantidades ficticias de jugo de limon, de agua y de azucar
    servirLimonada();
}

//Llamamos a la funcion principal para preparar limonada
var vasoDeLimonada = false;
prepararLimonada(5);//Llamado al programa





// Funciones para el proceso de limpieza de instrumental dental

// Función para enjuagar el instrumental dental con agua
function enjuagarConAgua(cantidadInstrumental) {
    console.log("Enjuagando " + cantidadInstrumental + " piezas de instrumental dental con agua.");
}

// Función para aplicar desinfectante al instrumental dental
function aplicarDesinfectante(cantidadInstrumental, Desinfectante) {
    console.log("Aplicando " + Desinfectante + " a " + cantidadInstrumental + " piezas de instrumental dental.");
}

// Función para esterilizar el instrumental dental
function esterilizarInstrumental(cantidadInstrumental) {
    console.log("Esterilizando " + cantidadInstrumental + " piezas de instrumental dental.");
}

// Función principal que lleva a cabo el proceso de limpieza y esterilización
function limpiarYEsterilizarInstrumental(cantidadInstrumental, Desinfectante) {
    enjuagarConAgua(cantidadInstrumental);
    aplicarDesinfectante(cantidadInstrumental, Desinfectante);
    esterilizarInstrumental(cantidadInstrumental);
}

// Llamamos a la función principal para limpiar y esterilizar el instrumental dental
limpiarYEsterilizarInstrumental(10, "desinfectante");

