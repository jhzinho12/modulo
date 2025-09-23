function inverterString(texto) {
    return texto.split("").reverse().join("");
}

function contarCaracteres(texto) {
    return texto.length;
}

module.exports = {
    inverterString,
    contarCaracteres
};