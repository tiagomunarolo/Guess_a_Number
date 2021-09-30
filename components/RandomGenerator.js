import { Alert } from 'react-native';
import constants from '../constants';

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const tryNewNumber = (min, max, ignore, type, current, choosenNumber, updateNumber, setNumber) => {
	const newNumber = getRandomIntInclusive(min, max);

	let liar = false;

	if (ignore && (newNumber == ignore || (Array.isArray(ignore) && ignore.includes(newNumber)))) {
		return tryNewNumber(min, max, ignore, type, current, choosenNumber, updateNumber, setNumber);
	}

	if ((current > choosenNumber && type === 'higher') || (current < choosenNumber && type === 'lower')) {
		liar = true;
		Alert.alert('Liar detected', `Please, play the game against the rules!!`);
		return;
	}

	if (!liar && newNumber == choosenNumber) {
		Alert.alert('Game Over', `Number found ${choosenNumber}`);
		setNumber(constants.GAME_OVER_SCREEN);
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
