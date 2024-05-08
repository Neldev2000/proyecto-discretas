export function generateVigenereKey(mensaje: string, llave: string) {
    let vigenereKey = '';
    for (let i = 0, j = 0; i < mensaje.length; ++i, j = (j + 1) % llave.length) {
        vigenereKey += llave[j];
    }
    return vigenereKey;
}

export function vigenereCipher(mensaje: string, vigenereKey: string) {
    let cifrado = '';
    for (let i = 0; i < mensaje.length; ++i) {
        let m = mensaje.charCodeAt(i) - 65;
        let k = vigenereKey.charCodeAt(i) - 65;
        let c = (m + k) % 26;
        cifrado += String.fromCharCode(c + 65);
    }
    return cifrado;
}