let matematica = require("./matematica");

matematica.calculabhaskara(1, 3, 2);

console.log(matematica.PI)

let calculadora = require("./calculadora");

console.log(calculadora.somar(2, 3));
console.log(calculadora.subtrair(2, 3));
console.log(calculadora.multiplicar(2, 3));
console.log(calculadora.dividir(15, 5));

let geometria = require("./geometria");

console.log(geometria.calculaAreaRetangulo(5, 10));
console.log(geometria.calculaPerimetroRetangulo(5, 10));
console.log(geometria.calculaAreaCirculo(1));
console.log(geometria.calculaCircunferencia(1));

let saudacao = require("./saudacao");

console.log(saudacao.digaoi("João"));
console.log(saudacao.digaTchau("João"));

let validador = require("./validador");

validador.verificaEmail("joao@gmail.com");

let filesystem = require("fs");
filesystem.writeFile("MUSICA.txt", "Ritmo musical", () => {
    
    console.log("Arquivo criado com sucesso!");
});

let texto = filesystem.readFileSync("MUSICA.txt",);
console.log(texto)

let manipulador = require("./manipulador");

console.log(manipulador.inverterString("? mob atse aid ues"));
console.log(manipulador.contarCaracteres("? mob atse aid ues"));

let conversor = require("./conversor");

console.log(conversor.celsiusParaFahrenheit(30));
console.log(conversor.quilogramasParaLibras(20));

