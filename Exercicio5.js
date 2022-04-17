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
require('dotenv').config()
const {BASE_URL, APPID, UNITS, LANGUAGE} = process.env


axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=23&lon=43&appid=${APPID}&units=${UNITS}&language=${LANGUAGE}`)
    .then(res => {
        return res.data;
    })
    .then(res => {
        console.log("Teste:" + res['main']['temp']);
        return res.main.temp;
    })
    .catch((erro) => console.log("ocorreu um erro" + erro))
