
const request = require('request-promise');

const options = {
    method: 'GET',
    uri: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3',
    json: true
}

request(options)
    .then(function (response) {
    	console.log(response);
        // Запрос был успешным, используйте объект ответа как хотите
    })
    .catch(function (err) {
        console.log('это не может быть ошибкой')
    })


