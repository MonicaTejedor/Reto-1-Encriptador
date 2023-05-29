const checkbox = document.getElementById("toggle_checkbox");
const seccionTextoEncriptado = document.getElementById(
  "seccion-texto-encriptado"
);
const textoEntrada = document.getElementById("texto-de-entrada");
const mensajeMinusculas = document.getElementById("contenedor-mensaje");
const botonEncriptar = document.getElementById("boton-encriptar");
const botonDesencriptar = document.getElementById("boton-desencriptar");
const botonCopiar = document.getElementById("boton-copiar");
const body = document.body;
const imagenMunieco = document.getElementById("img-munieco");
const imagenExclamacion = document.getElementById("img-signo-exclamacion");
const textoNingunMensaje = document.getElementById("texto-ningun-mensaje");
const textoIngresarTexto = document.getElementById("texto-ingresar-texto");
const textoSalida = document.getElementById("texto-salida");
const footer = document.getElementById("footer");
textoSalida.disabled = true;
//Modo oscuro:
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    seccionTextoEncriptado.classList.add("checked");
    textoEntrada.classList.add("checked");
    mensajeMinusculas.classList.add("checked");
    botonEncriptar.classList.add("checked");
    botonDesencriptar.classList.add("checked");
    botonCopiar.classList.add("checked");
    textoSalida.classList.add("checked");
    body.classList.add("checked"); // Agrega la clase 'checked' al body
    footer.classList.add("checked"); // Agrega la clase 'checked' al body
    imagenMunieco.src = "../../assets/img/munieco-oscuro.png";
    setTimeout(function () {
      imagenExclamacion.src = "../assets/img/signo-exclamacion-oscuro.png";
    }, 150);
  } else {
    seccionTextoEncriptado.classList.remove("checked");
    textoEntrada.classList.remove("checked");
    mensajeMinusculas.classList.remove("checked");
    botonEncriptar.classList.remove("checked");
    textoSalida.classList.remove("checked");
    botonDesencriptar.classList.remove("checked");
    botonCopiar.classList.remove("checked");
    body.classList.remove("checked"); // Remueve la clase 'checked' del body
    footer.classList.remove("checked"); // Remueve la clase 'checked' del body
    imagenMunieco.src = "./assets/img/Munieco.png";
    imagenExclamacion.src = "./assets/img/Munieco.png";
  }
});

function validarTexto(operacion) {
  let contenido = textoEntrada.value;
  if (contenido==="") {
    mostrarElementosEncriptador();
  } else {
    contenido = contenido.toLowerCase();
    const tieneAsento = /[^\u0000-\u007F]/.test(contenido);
    const tieneCaracteresEspeciales = /[^a-zA-Z0-9 ]/.test(contenido);
    if (tieneAsento || tieneCaracteresEspeciales) {
      alert("El texto contiene acentos o caracteres especiales.");
    } else {
      if (operacion === "encriptar") {
        encriptarTexto(contenido);
      } else {
        if (operacion === "desencriptar") {
          desencriptarTexto(contenido);
        }
      }
    }
  }
}
function encriptarTexto(texto) {
  let textoEncriptado = reemplazarLetra(texto, "e", "enter");
  textoEncriptado = reemplazarLetra(textoEncriptado, "i", "imes");
  textoEncriptado = reemplazarLetra(textoEncriptado, "a", "ai");
  textoEncriptado = reemplazarLetra(textoEncriptado, "o", "ober");
  textoEncriptado = reemplazarLetra(textoEncriptado, "u", "ufat");
  esconderElementosEncriptador();
  textoSalida.value = textoEncriptado;
  console.log("texto encriptado: ", textoEncriptado);
}
function desencriptarTexto(texto) {
  let textoDesencriptado = reemplazarLetra(texto, "enter", "e");
  textoDesencriptado = reemplazarLetra(textoDesencriptado, "imes", "i");
  textoDesencriptado = reemplazarLetra(textoDesencriptado, "ai", "a");
  textoDesencriptado = reemplazarLetra(textoDesencriptado, "ober", "o");
  textoDesencriptado = reemplazarLetra(textoDesencriptado, "ufat", "u");
  esconderElementosEncriptador();
  textoSalida.value = textoDesencriptado;
  console.log("texto encriptado: ", textoDesencriptado);
}
function reemplazarLetra(original, letraABuscar, letraReemplazo) {
  const regex = new RegExp(letraABuscar, "gi"); // 'gi' indica reemplazo global e insensible a mayúsculas/minúsculas
  return original.replace(regex, letraReemplazo);
}

function esconderElementosEncriptador() {
  imagenMunieco.style.display = "none";
  textoNingunMensaje.style.display = "none";
  textoIngresarTexto.style.display = "none";
  textoSalida.style.display = "flex";
  botonCopiar.style.display = "block";
}
function copiarTexto() {
  textoEntrada.value = textoSalida.value;
}
function mostrarElementosEncriptador() {
  imagenMunieco.style.display = "block";
  textoNingunMensaje.style.display = "flex";
  textoIngresarTexto.style.display = "flex";
  textoSalida.style.display = "none";
  botonCopiar.style.display = "none";
}
