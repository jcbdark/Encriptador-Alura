const textoNormal = document.getElementById("texto-normal");
const textoEncriptado = document.getElementById("texto-encriptado");
const contentInfo = document.getElementById("info");
const contentRespuesta = document.getElementById("respuesta");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");

btnEncriptar.addEventListener('click', () => {
    let texto = textoNormal.value;
    if (!texto) {
        contentInfo.classList.remove('oculto');
        contentRespuesta.classList.add('oculto');
    } else {
        const textEncriptado = encriptar(texto);
        textoEncriptado.innerHTML = textEncriptado;
        textoNormal.value = '';
        contentInfo.classList.add('oculto');
        contentRespuesta.classList.remove('oculto');
    }
});

btnDesencriptar.addEventListener('click', () => {
    let texto = textoNormal.value;
    if (!texto) {
        contentInfo.classList.remove('oculto');
        contentRespuesta.classList.add('oculto');
    } else {
        const textDesencritpado = desencriptar(texto);
        textoEncriptado.innerHTML = textDesencritpado;
        textoNormal.value = '';
        contentInfo.classList.add('oculto');
        contentRespuesta.classList.remove('oculto');
    }
});

btnCopiar.addEventListener('click', () => {
    copiarTexto(textoEncriptado.innerHTML);
});

const copiarTexto = (texto) => {
    var textarea = document.createElement('textarea');
    textarea.value = texto;
    textarea.setAttribute('readonly', '');
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        console.log('El texto ha sido copiado al portapapeles.');
    } catch (err) {
        console.log('No se pudo copiar el texto.');
    }
    document.body.removeChild(textarea);
}

const encriptar = (stringEncriptado) => {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

const desencriptar = (stringDesencriptado) => {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}
