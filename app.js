const textArea = document.getElementById("encript_input");
const mensaje = document.querySelector('.result_encrypt')
const copyButton = document.querySelector('.copy');

/*    
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){ 
    const validacion = validaCaracteres(textArea.value)
    if(!validacion){
        mostrarMensajeError()
        return
    }
    const textoEncriptado = encriptar(textArea.value);
    mensaje.textContent = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    const matrizCodigo = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    return stringEncriptada
        .toLowerCase()
        .replace(/[eioua]/g, char => matrizCodigo[char]);
}

function validaCaracteres(cadena){
    const regex = /^[a-z\d\s]+$/;
    return regex.test(cadena);
}

function btnDesencriptar(){ 
    const validacion = validaCaracteres(textArea.value)
    if(!validacion){
        mostrarMensajeError()
        return
    }
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.textContent = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return stringDesencriptada;
}

// Función para copiar el texto al portapapeles
function copiarAlPortapapeles() {
    // Usar la API Clipboard para copiar el texto
    navigator.clipboard.writeText(mensaje.textContent)
        .then(() => {
            alert('Texto copiado con éxito');
        })
        .catch(err => {
            alert('Error al copiar el texto: ' + err);
        });
}
function mostrarMensajeError() {
    const mensajeExito = document.querySelector('.message');
    mensajeExito.style.display = 'block';
    setTimeout(() => {
        mensajeExito.style.display = 'none';
    }, 2000);
}

function limpiar(){
    textArea.value = "";
    mensaje.innerHTML = "";
}