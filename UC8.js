// iniciando o exercício da UC8.
let PesoPeca = 100
if(PesoPeca > 100) {
    console.log("Peso maior que 100g, não podemos cadastrar")} 
else{
    console.log("peso menor que 100g, podemos cadastrar")
}

// Verificar número de peças cadastradas.
let NumeroPecas = 10
if(NumeroPecas < 10) {
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça")}
else{
    console.log("Não há espaço disponivel na caixa")
}

// Verificar o comprimento do nome da peça. 
let comprimentoPeca = 'disco de freio'
console.log("Comprimento do número da peça é: ", comprimentoPeca.length)
if(comprimentoPeca.length >3) {
    console.log("Caracteres maior que 3, podemos cadastrar")
} else{
    Console.log("Carateres menores que 3, não podemos cadastrar")
}