import {Alert } from 'react-native';

export const tryNewNumber = (min, max, ignore, type, current, choosenNumber, updateNumber, setNumber) => {
	const newNumber = Math.floor(Math.ceil(Math.random() * (max - min)) + min);
	let liar = false;

	if (ignore && newNumber == ignore) {
		return tryNewNumber(min, max, ignore, type, current, choosenNumber, updateNumber, setNumber);
	}

	if ((current > choosenNumber && type === 'higher') || (current < choosenNumber && type === 'lower')) {
		liar = true;
		Alert.alert('Liar detected', `Please, play the game against the rules!!`);
        return;
	}

	if (!liar && newNumber == choosenNumber) {
		Alert.alert('Game Over', `Number found ${choosenNumber}`);
		setNumber(false);
        return;
	}

	if (
		min <= newNumber <= max &&
		((type == 'higher' && newNumber > current) || (type == 'lower' && newNumber < current))
	) {
		console.log('Updating input to ', newNumber);
		updateNumber(newNumber);
	} else {
		tryNewNumber(min, max, null, type, current, choosenNumber, updateNumber, setNumber);
	}
};
