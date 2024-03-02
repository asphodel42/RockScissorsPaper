function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const setNewTextLabel = () => {
	var label = document.querySelector('.mainLabel');
	label.innerText = 'Ходить другий гравець';
}

const AnimateBtn = () => {
	var element = document.querySelector('.anim_block');
	
	var random = getRandomInt(400);
	if (getRandomInt(2) === 1) {
		var state = 'top';
	} else {
		var state = 'bottom'
	}

	element.style = `${state}: ${random}px;`;

	setTimeout(() => {

		var random = getRandomInt(400);
		if (getRandomInt(2) === 1) {
			var state = 'right';
		} else {
			var state = 'left'
		}
		
		element.style = `${state}: ${random}px;`;


		setTimeout(() => {
			element.style = '';
		}, 800);


	}, 800);

	
	console.log('animation!');
	setNewTextLabel();
}



document.querySelector('span.text').addEventListener('click', AnimateBtn);