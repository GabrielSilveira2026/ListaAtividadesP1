/*Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
atual (atributo chamado temp). O programa deve ser um loop que exibe as seguintes
opções para o usuário:
1- Digitar latitude e longitude
2- Sair
O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
informar os valores de latitude e longitude da localização da qual deseja saber a
temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
de ambiente que indica qual unidade de medida de temperatura deve ser utilizada:
Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
e de tomar o cuidado de não armazená-lo no sistema de controle de versão.*/

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const { default: axios } = require('axios')
const prompt = require("prompt-sync")();
require('dotenv').config()
const {APPID, UNITS, LANGUAGE} = process.env


function retornaLink(lat,lon){
    // return new Promise((resolve, reject) => {

        const resposta = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=${UNITS}&language=${LANGUAGE}`)

        return Promise.resolve(resposta)
        // }
    // );
}

async function menu (){
    let opcao = 0;
    do {
console.log(`
1- Digitar latitude e longitude 
2- Sair`)
        opcao = prompt();
        Number(opcao);
        switch (opcao) {
        case "1":
            lat = prompt("Digite uma latitude: ");
            Number(lat);
            lon = prompt("Digite uma longitude: ");
            Number(lon);
            const resposta = await retornaLink(lat,lon)
            console.log("A temperatura da latitude: " + lat + " e longitude: " + lon + " é = " + resposta['data']['main']['temp'] + " Celsius");
            break;
        case "2":
            break;
        default:
            console.log("Você inseriu uma opção errada, tente novamente ");
        }
    } while (opcao != 2);
}

menu();

