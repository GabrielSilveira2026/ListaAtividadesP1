// 3. Crie um objeto JSON que abriga todas as operações do exercício 2.

const Operações = {
    
    soma: (num1, num2) => num1 + num2,

    subtrai: (num1, num2) => num1 - num2,

    multiplica: (num1, num2) => num1 * num2,

    divide: (num1, num2) => num1 / num2
}

console.log(Operações.multiplica(2,5));