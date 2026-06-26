
# proyecto-pensamiento-computacional-s5


## Link de web pública (github pages)

<https://link.com> https://barrera-martinna.github.io/sketchinteractivo.martinna/

### Título del proyecto

Up: una aventura en altura

### Referencia de origen / bibliografía

Pelicula up: una aventura en altura, del año 2009. Pais de origen: Estados Unidos, del estudio Pixar Animation Studios y Walt Disney Pictures. Carl es un vendedor de globos, el cual tiene un sueño de volar con su casa llena de globos sudamerica y de pronto conoce a Russel con quien primero mantiene un recelo, pero luego, estos comienzan a vivir grandes aventuras juntos, volando por ditintos lugares. 

### Imagen de referencia de proyecto
<img width="1024" height="1032" alt="portada up" src="https://github.com/user-attachments/assets/90a1644d-7da6-44e7-bff7-44fd81134180" />
Portada del relato. Up

### Integrantes

Martinna Barrera [barrera-martinna](https://github.com/barrera-martinna)



### Enlace de p5.js 

<https://editor.p5js.org/martinna/full/k1uFrxhB7>

### Relato inicial

Tomando de referencia principal la escena donde se encuentran Rusell, Carl y el perrito colgando de una soga desde la casa en el aire. A partir de estareferencia de escena en la pelicula, se genero el relato que consta de 3 escenas, la primera en donde se encuentra la casa y sus globos el cual este era el sueño de Carl. luego en la segunda escena la casa comienza a volar y finalmente up! el niño Russel cae de la casa. 

### Storyboard

Imágenes del storyboard, las que deben verse acá y estar subidas en el mismo repositorio

### Estados

El proyecto en p5.js contiene 7 estados los cuales 3 presentan escenas (escena 1: con la funcion mousePressed clickeando la pantalla aparece la casa y se le comienzan a poner los globos) (escena 2: en donde con la funcion mouseWheel se hace scroll y la casa comienza a elevarse con sus globos) (escenna 3: en donde con la funcion mouseMoved de repente el niño Russell cae desde la casa que estaba en el aire). Los otros tres estados resultan como intermediarios dando indicaciones sobre la interaccion necesaria para ejecutar las siguientes escenas y el ultimo presetna la imagen intermediaria con un texto que dice fin. 

#### Estado 1 de escena 

En el primer estado, al hacer click aparece la casa y sus globos. 

```js

  //Dentro de function draw
else if (estado == 1) {
  // Muestra la secuencia de imágenes de la casa y globos
  image(clickImagenes[clickFrame], 0, 0, width, height);
}

//Dentro de function mousePressed
if (estado == 1) {
// Avanza al siguiente fotograma con cada click
  clickFrame++;
  
  // Si llega al final de las imágenes, pasa al estado 2 el cual es intermediario instructivo
  if (clickFrame >= clickImagenes.length) {
    estado = 2;
  }
}

```


#### Estado 2 de escena

En el segundo acto, se debe hacer scroll hacia arriba para que la casita comience a volar. 

```js
//Dentro de function draw
else if (estado == 3) {
  // Muestra la secuencia de la casa elevándose
  image(scrollImagenes[scrollFrame], 0, 0, width, height);
}

// Dentro de function mouseWheel(event) 
// Verifica que esté en el estado 3 y que el scroll sea hacia arriba
if (estado == 3 && event.delta < 0) {
//avanza con la secuencia de imagenes 
  scrollFrame++;
  
  // Al terminar las imágenes, avanza al estado instructivo 4
  if (scrollFrame >= scrollImagenes.length) {
    estado = 4;
  }
}

```


#### Estado 3 de escena

En el tercer acto, se debe mover el cursor del mouse hacia la derecha sobre el eje x para ver como Russel se cae de la casita. 

```js
//Dentro de function draw
else if (estado == 5) {
  // Muestra la secuencia de Russell cayendo
  image(mouseImagenes[mouseFrame], 0, 0, width, height);
}

//Dentro de function mouseMoved
if (estado == 5) {
  // Si el mouse se desplaza hacia la derecha en el eje X
  if (mouseX - pmouseX > 2) {
//avanza los fotogramas de la caida de Russel 
    mouseFrame++;
  }
  
  // Al llegar al final de la animación, pasa al estado final 6 (final)
  if (mouseFrame >= mouseImagenes.length) {
    estado = 6;
  }
}
```


