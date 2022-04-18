// 2. Refaça o exercício 1 usando arrow functions.
soma = (num1,num2) => {
    console.log("A soma de " + num1 + " e " + num2 + " é = " + (num1 + num2))    
    return num1 + num2;
}

subtrai = (num1,num2) => {
    console.log("A subtração de " + num1 + " e " + num2 + " é = " + (num1 - num2))
    return num1 - num2;
}

multiplica = (num1,num2) => {
    console.log("A multiplicação de " + num1 + " e " + num2 + " é = " + num1*num2)
    return num1 * num2;
}

divide = (num1,num2) => {
    console.log("A divisão de " + num1 + " e " + num2 + " é = " + num1/num2)
    return num1 / num2;
}

const a = 20
const b = 10

soma(a,b)
subtrai(a,b)
multiplica(a,b)
divide(a,b)
