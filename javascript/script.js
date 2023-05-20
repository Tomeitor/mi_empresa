//Esto hace que se achique tu título, la primer medida es a la que se achica, y la segunda
//que es el mismo tamaño que tenés, es para cuando volvmeos a subir el scroll

//Gracias Yamila de Coderask por ayudarme

window.addEventListener("scroll", function () {
  var logo = document.getElementById("logo");

  if (window.pageYOffset > 0) {
    logo.style.fontSize = "4rem"; // Modifica el tamaño del texto al hacer scroll
    logo.style.transition = "1s";
  } else {
    logo.style.fontSize = "5rem"; // Restaura el tamaño original del texto
  }
});

/* window.addEventListener("scroll", function () {
  var formbuscar = document.getElementById("formbuscar");

  if (window.pageYOffset > 0) {
    formbuscar.style.display = "none"; // Lo hace desaparecer si hacemos scroll
  } else {
    formbuscar.style.display = "block"; // Lo aparece si volvemos arriba
  }
});
 */
