import { Alert } from 'react-native';
import constants from '../constants';

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const tryNewNumber = (data) => {
	const newNumber = getRandomIntInclusive(data.min, data.max);
	let liar = false;

	if (data.ignore && (newNumber == data.ignore || (Array.isArray(data.ignore) && data.ignore.includes(newNumber)))) {
		return tryNewNumber(data);
	}

	if (
		(data.current > data.choosenNumber && data.inputType === 'higher') ||
		(data.current < data.choosenNumber && data.inputType === 'lower')
	) {
		liar = true;
		Alert.alert('Liar detected', `Please, play the game against the rules!!`);
		return;
	}

	if (!liar && newNumber == data.choosenNumber) {
		Alert.alert('Game Over', `Number found ${data.choosenNumber}`);
		data.updateScreen(constants.GAME_OVER_SCREEN);
		data.setRounds(data.ignore.length);
		return;
	}

	if (
		data.min <= newNumber <= data.max &&
		((data.inputType == 'higher' && newNumber > data.current) ||
			(data.inputType == 'lower' && newNumber < data.current))
	) {
		console.log('Updating input to ', newNumber);
		data.updateNum(newNumber);
	} else {
		tryNewNumber(data);
	}
};
