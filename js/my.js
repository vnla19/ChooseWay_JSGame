const userName = prompt('Назовите ваше Имя')

if (userName !== '') {
	alert('Приветствую ' + userName + ' Предлагаю вам сыграть в игру "Богатырь"')

	alert('Окей! Будьте готовы! Игра начинаеться!')

	let sideWay = prompt('Выберите путь Богатыря! Налево, Направо, Вперёд?')

	function chooseWay() {
		if (sideWay.toLowerCase() === 'налево'|| sideWay.toLowerCase() === 'на лево') {
			alert('Вы выбрали идти Налево!')
		} else if (sideWay.toLowerCase() === 'направо' || sideWay.toLowerCase() === 'на право') {
			alert('вы выбрали идти Направо!')
        } else if (sideWay.toLowerCase() === 'вперёд' || sideWay.toLowerCase() === 'вперед') {
			alert('вы выбрали идти Вперёд!')
		} else {
			sideWay = prompt('Не понятно что вы выбрали, повторите ввод')
			chooseWay()
		}
	}

	chooseWay()
	alert(' Генерируем путь!')

	if (sideWay.toLowerCase() === 'направо') {
		alert('Вы потеряли жизнь!')
	} else if (sideWay.toLowerCase() === 'налево') {
		alert('Вы нашли счастье!')
	} else {
		alert('Вы потеряли коня!')
	}

	}