var btn = document.getElementsByTagName('button')[0];

var btn = document.getElementsByTagName('button')[0];

	btn.addEventListener('click', function() {
		fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3')
			.then(function(response) {
			    return response.json();
			})
			.then(function(data){
				console.log(data);
			})
			.catch( console.log );			
			})

