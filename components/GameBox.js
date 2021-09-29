import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Card from './Card';
import LowerHigherBtn from './LowerHigherComponent';
import { tryNewNumber } from './RandomGenerator';

export default function GameBox(props) {
	const choosenNumber = props.number;
	const setNumber = props.setNumber
	const [ minNumber, updateMinNumber ] = useState(1);
	const [ maxNumber, updateMaxNumber ] = useState(99);
	const [ numberInput, updateNumber ] = useState(0);

	const lowerHandler = (num) => {
		if (num < maxNumber && num >= choosenNumber) updateMaxNumber(num);
		tryNewNumber(minNumber, maxNumber, null, 'lower', numberInput,choosenNumber, updateNumber, setNumber);
	};

	const higherHandler = (num) => {
		if (num > minNumber && num <= choosenNumber) updateMinNumber(num);
		tryNewNumber(minNumber, maxNumber, null, 'higher', numberInput,choosenNumber, updateNumber, setNumber);
	};

	const input = () => {
		return (
			<View style={styles.inputBox}>
				<Text textAlign="center" style={styles.text}>
					{numberInput}
				</Text>
			</View>
		);
	};

	const button = () => {
		return <LowerHigherBtn lowerHandler={lowerHandler} higherHandler={higherHandler} numberInput={numberInput} />;
	};

	return <Card button={button} input={input} cardBox={styles.cardBox} />;
}

const styles = StyleSheet.create({
	cardBox: {
		width: '80%',
		height: 200
	},
	inputBox: {
		marginTop: 20,
		alignSelf: 'center',
		width: 100,
		height: 100,
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 50
	}
});
