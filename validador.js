function verificaEmail(email) {
    let valido = false;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@" ) {
            valido = true;
        }
    }
    if (valido) {
        console.log("Email válido");
    } else {
        console.log("Email inválido");
    }
}

module.exports = {verificaEmail};