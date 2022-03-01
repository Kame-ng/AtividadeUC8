let NumeroAluno = 10;
for (let contador = 0 ; contador < NumeroAluno; contador++){
    
    if (contador == 0){
        console.log ("O numero é zero")
    }
     else if (contador % 2 == 0){
        console.log (`O numero ${contador} é par`)
    }
     else if (contador % 2 == 1){
        console.log(`O numero ${ contador} é impar`)
    }
    
}