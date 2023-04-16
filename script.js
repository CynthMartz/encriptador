const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const ingresarTexto = document.getElementById("ingresarMensaje");
const salidaTexto = document.getElementById("mensajeEncriptado");
const btnCopy = document.getElementById("botonCopiar");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

ingresarTexto.focus();

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = ""; //sirve para eliminar la imagen cuando ingrese el texto
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i=0; i < matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo [i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado 
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = ""; //sirve para eliminar la imagen cuando ingrese el texto
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i=0; i < matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo [i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado 
}
//boton copiar

botonCopiar.addEventListener("click", copiar);

function copiar(){
    if(mensajeEncriptado.value != ""){
        ingresarTexto.value= mensajeEncriptado.value;
        navigator.clipboard.writeText(mensajeEncriptado.value);
        estadoNormal();
        ingresarTexto.select();
    }
    ingresarTexto.focus();
}
