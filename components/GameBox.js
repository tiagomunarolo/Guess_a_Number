import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Card from './Card';
import LowerHigherBtn from './LowerHigherComponent';
import { tryNewNumber } from './RandomGenerator';

export default function GameBox(props) {
	const choosenNumber = props.number;
	const setNumRounds = props.setNumRounds;
	const [ minNumber, updateMinNumber ] = useState(1);
	const [ maxNumber, updateMaxNumber ] = useState(99);
	const [ numberInput, updateNumber ] = useState(0);
	const [ listOfNumbers, updateListOfNumbers ] = useState([]);

	const parameters = {
		min: minNumber,
		max: maxNumber,
		ignore: listOfNumbers,
		inputType: '',
		current: numberInput,
		choosenNumber: choosenNumber,
		updateNum: updateNumber,
		updateScreen: props.updateScreen,
		setRounds: setNumRounds
	};

	const updateListOfNumbersHandler =  (num) => {
		updateListOfNumbers((currentList) => {
			let listReturn = [];
			if (currentList.includes(num)) listReturn = currentList;
			else listReturn = [ ...currentList, num ];
			return listReturn;
		});
	};

	const lowerHandler = (num) => {
		if (num < maxNumber && num >= choosenNumber) updateMaxNumber(num);
		updateListOfNumbersHandler(num);
		parameters.inputType = 'lower';
		tryNewNumber(parameters);
	};

	const higherHandler = (num) => {
		if (num > minNumber && num <= choosenNumber) updateMinNumber(num);
		updateListOfNumbersHandler(num);
		parameters.inputType = 'higher';
		tryNewNumber(parameters);
	};

	const showListFunction = (num, index) => {
		return (
			<View key={index} style={styles.listStyle}>
				<Text style={styles.textList}>
					Round {index + 1}: {num}
				</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Card cardBox={styles.cardBox}>
				<View style={styles.inputBox}>
					<Text textAlign="center" style={styles.text}>
						{numberInput}
					</Text>
				</View>
				<LowerHigherBtn lowerHandler={lowerHandler} higherHandler={higherHandler} numberInput={numberInput} />
			</Card>
			<View style={styles.listContainer}>
				<ScrollView contentContainerStyle={styles.listView}>
					{listOfNumbers.map((num, index) => showListFunction(num, index))}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
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
	},
	listContainer: {
		flex: 1,
		marginVertical: 30,
		width: '80%',
		height: '100%',
		alignItems: 'center'
		//borderWidth: 1
	},
	listView: {
		flex: 1,
		width: 300,
		height: '100%',
		//borderWidth: 1,
		alignItems: 'center'
	},
	textList: {
		flex: 1,
		overflow: 'hidden',
		borderRadius: 15,
		borderWidth: 2,
		borderColor: 'blue',
		textAlign: 'center',
		alignItems: 'center',
		width: '100%',
		height: 100,
		backgroundColor: '#f2e6ff',
		color: 'blue'
	},
	listStyle: {
		padding: 10,
		width: '100%',
		height: 50,
		alignItems: 'center'
		//borderWidth: 1,
	}
});
