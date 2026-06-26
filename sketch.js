let estado = 0;

//guarda la imagen de inicio e intermediaria
let a1;

//guardan las secuencias de imagenes que se ejecutaran con cada interacción 
let clickImagenes = [];
let scrollImagenes = [];
let mouseImagenes = [];

//contador de fotogramas para saber que imagen de la secuencia se debe mostrar en tal fotograma y asi. empezara en cero y cuando haga click se comenzara a reproducir 
let clickFrame = 0;
let scrollFrame = 0;
let mouseFrame = 0;

//funcion para cargar las imagenes en el sketch
function preloadDesactivado() {

  // imagen intermediaria con textoss
  a1 = loadImage("a1.jpg");

  // secuencia de imagenes de casa y globos (se necesita interaccion con el click)
  clickImagenes[0] = loadImage("C1.jpg");
  clickImagenes[1] = loadImage("C2.jpg");
  clickImagenes[2] = loadImage("C3.jpg");
  clickImagenes[3] = loadImage("C4.jpg");
  clickImagenes[4] = loadImage("C5.jpg");
  clickImagenes[5] = loadImage("C6.jpg");
  clickImagenes[6] = loadImage("C7.jpg");
  clickImagenes[7] = loadImage("C8.jpg");
  clickImagenes[8] = loadImage("C9.jpg");

  //secuencia de imagenes en donde la casa sube con interacción de scroll
  scrollImagenes[0] = loadImage("scroll1.jpg");
  scrollImagenes[1] = loadImage("scroll2.jpg");
  scrollImagenes[2] = loadImage("scroll3.jpg");

  //secuencia de imagenes de russsel cayendo del aire, se ejecutan con la interaccion de mover el coursor del mouse en el eje x 
  mouseImagenes[0] = loadImage("M1.jpg");
  mouseImagenes[1] = loadImage("M2.jpg");
  mouseImagenes[2] = loadImage("M3.jpg");
  mouseImagenes[3] = loadImage("M4.jpg");
  mouseImagenes[4] = loadImage("M5.jpg");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);

}

function draw() {

  //da igual el color de fondo porque las imagenes van encima a pantalla completa 
  background(220);
  
  // Si la variable estado esta en cero ejecutara la imagen a1
  if (estado == 0) {

    image(a1, 0, 0, width, height);
    mostrarTexto("CLICKEA DONDE QUIERAS");

  }

  // Si la variable estado ahora es igual a 1, se ejecutara la secuencia de clickImagenes
  else if (estado == 1) {

    image(clickImagenes[clickFrame], 0, 0, width, height);
  }

  // Si el estado es igual a 2 se ejecuta la imagen intermedia con su texto explicativo
  else if (estado == 2) {

    image(a1, 0, 0, width, height);
    mostrarTexto("HAZ SCROLL HACIA ARRIBA");
  }

  // Si es igual a 3, se ejecuta la secuencia de imagenes de la variable scrollImagenes 
  else if (estado == 3) {

    image(scrollImagenes[scrollFrame], 0, 0, width, height);
  }

  // Cuando la variable es igual a 4, se ejecuta la imagen y el texto instructivo (Se quitó el 'if' que causaba el salto instantáneo)
  else if (estado == 4) {

    image(a1, 0, 0, width, height);
    mostrarTexto("MUEVE EL MOUSE HORIZONTALMENTE");
  }
    
  // Si la variable estado es igual a 5 se ejecutara la secuencia de Russell cayendo
  else if (estado == 5) {

    image(mouseImagenes[mouseFrame], 0, 0, width, height);
  }
    
  // Estado 6 y final del relato interactivo
  else if (estado == 6) {

    image(a1, 0, 0, width, height);
    mostrarTexto("FIN");

  }

}

//cuando el usuario hace click se ejecuta esta funcion 
function mousePressed() {

  // Si se hace click estando en el estado 0, permitira cambiar al estado 1
  if (estado == 0) {

    clickFrame = 0;
    estado = 1;
    return;

  }

  // Si la variable estado es 1, avanza con cada click
  if (estado == 1) {
     clickFrame++;

    // Al llegar al final ejecuta el estado instructivo 2
    if (clickFrame >= clickImagenes.length) {
       estado = 2;
    }
  }
}

//esta en el estado 2 o 3, hace scroll y activa la funcion mouseWheel
function mouseWheel(event) {

  // Entrar a secuencia scroll (estado 3)
  if (estado == 2) {
    estado = 3;
    return false;
  }

  // Si estas en el estado 3 y haces scroll hacia arriba (delta < 0), avanza la secuencia
  if (estado == 3 && event.delta < 0) {
    scrollFrame++;

    // Si ya no quedan mas fotos, se pasa al estado instructivo 4
    if (scrollFrame >= scrollImagenes.length) {
       estado = 4;
    }

  }

  return false;

}

// Aqui se concentra toda la logica de movimiento de cursor
function mouseMoved(){

  // CORRECCIÓN: Si está en la pantalla instructiva (Estado 4) y mueve el mouse a la derecha, avanza a la escena (Estado 5)
  if (estado == 4) {
    if (mouseX - pmouseX > 2) {
      estado = 5;
    }
  }

  // Si ya está en la escena animada (Estado 5), los movimientos a la derecha avanzan los cuadros de animación
  else if (estado == 5) {
    if (mouseX - pmouseX > 2) {
      mouseFrame++;
    }
    
    // Al llegar al final de la secuencia de imagenes, pasa al estado final 6
    if (mouseFrame >= mouseImagenes.length){
      estado = 6;
    }
  }
}

//funcion de textos
function mostrarTexto(mensaje) {

  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(40);
  text(mensaje, width / 2, height - 80);

}

//funcion para que el sketch sea adaptable a las pantallas 
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
