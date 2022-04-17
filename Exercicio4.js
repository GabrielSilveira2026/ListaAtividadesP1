/*4. Escreva um script que apresenta as seguintes operações para o usuário:
1- Soma
2- Subtração
3-Multiplicação
4- Divisão
5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 4 para realizar as operações aritméticas.
*/
const prompt = require("prompt-sync")();

function Operadores(){

    const Operações = {
    
        soma: (num1, num2) => (num1 + num2),
    
        subtrai: (num1, num2) => (num1 - num2),
    
        multiplica: (num1, num2) => (num1 * num2),
    
        divide: (num1, num2) => (num1 / num2)
    }

    let opcao = 0

    do{
        console.log(`Qual operação vc deseja realizar?
        1- Soma
        2- Subtração
        3-Multiplicação
        4- Divisão
        5- Sair
        `)

        opcao = prompt("")
        Number(opcao)
        
        switch (opcao) {
            case '1':
                let n1Soma = prompt("Digite o primeiro valor: ")
                let n2Soma = prompt("Digite o segundo valor: ")
                console.log(Operações.soma(Number(n1Soma),Number(n2Soma)))
                break;
                
            case '2':
                let n1Sub = prompt("Digite o primeiro valor: ")
                let n2Sub = prompt("Digite o segundo valor: ")
                console.log(Operações.subtrai(Number(n1Sub),Number(n2Sub)))
                break;

            case '3':
                let n1Mult = prompt("Digite o primeiro valor: ")
                let n2Mult = prompt("Digite o segundo valor: ")
                console.log(Operações.multiplica(Number(n1Mult),Number(n2Mult)))
                break;

            case '4':
                let n1Div = prompt("Digite o primeiro valor: ")
                let n2Div = prompt("Digite o segundo valor: ")
                console.log(Operações.divide(Number(n1Div),Number(n2Div)))
                break;

            case '5':
                console.log("Saindo... Até Mais!")
                break;

            default:
                console.log(`Tente Novamente`);
        }
    }while(opcao !== '5')
}

Operadores();