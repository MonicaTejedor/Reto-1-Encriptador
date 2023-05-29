const checkbox = document.getElementById("toggle_checkbox");
const seccionTextoEncriptado = document.getElementById(
  "seccion-texto-encriptado"
);
const textoEntrada = document.getElementById("texto-de-entrada");
const mensajeMinusculas = document.getElementById("contenedor-mensaje");
const botonEncriptar = document.getElementById("boton-encriptar");
const botonDesencriptar = document.getElementById("boton-desencriptar");
const body = document.body;
const imagenMunieco = document.getElementById("img-munieco");
const imagenExclamacion = document.getElementById("img-signo-exclamacion");
const footer = document.getElementById("footer");
//Modo oscuro:
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    seccionTextoEncriptado.classList.add("checked");
    textoEntrada.classList.add("checked");
    mensajeMinusculas.classList.add("checked");
    botonEncriptar.classList.add("checked");
    botonDesencriptar.classList.add("checked");
    body.classList.add("checked"); // Agrega la clase 'checked' al body
    footer.classList.add("checked"); // Agrega la clase 'checked' al body
    imagenMunieco.src = "/assets/img/munieco-oscuro.png";
    setTimeout(function () {
      imagenExclamacion.src = "/assets/img/signo-exclamacion-oscuro.png";
    }, 150);
  } else {
    seccionTextoEncriptado.classList.remove("checked");
    textoEntrada.classList.remove("checked");
    mensajeMinusculas.classList.remove("checked");
    botonEncriptar.classList.remove("checked");
    botonDesencriptar.classList.remove("checked");
    body.classList.remove("checked"); // Remueve la clase 'checked' del body
    footer.classList.remove("checked"); // Remueve la clase 'checked' del body
    imagenMunieco.src = "/assets/img/Munieco.png";
    imagenExclamacion.src = "/assets/img/signo-exclamacion.png";
  }
});

function validarTexto() {
  let contenido = textoEntrada.value;
  contenido = contenido.toLowerCase();
  const tieneAsento = /[^\u0000-\u007F]/.test(contenido);
  const tieneCaracteresEspeciales = /[^a-zA-Z0-9]/.test(contenido);
  if (tieneAsento || tieneCaracteresEspeciales) {
    alert("El texto contiene acentos o caracteres especiales.");
  } else {
    console.log("El texto no contiene acentos ni caracteres especiales.");
  }
  console.log("texto entrada: ", contenido);
}
function encriptarTexto() {
}
