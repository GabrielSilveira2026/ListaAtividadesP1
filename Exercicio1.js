// 1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
// receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
// operação. Faça a implementação usando a palavra function para todas elas.

function soma(num1,num2){
    let res
    res = num1 + num2
    console.log("A soma de " + num1 + " e " + num2 + " é = " + res)
    return res
}

function subtrai(num1,num2){
    let res
    res = num1 - num2
    console.log("A subtração de " + num1 + " e " + num2 + " é = " + res)
    return res
}

function multiplica(num1,num2){
    let res
    res = num1 * num2
    console.log("A multiplicação de " + num1 + " e " + num2 + " é = " + res)
    return res
}

function divide(num1,num2){
    let res
    res = num1 / num2
    console.log("A divisão de " + a + " e " + b + " é = " + res)
    return res
}


const a = 10
const b = 5

soma(a, b);
subtrai(a, b);
multiplica(a,b);
divide(a, b);
