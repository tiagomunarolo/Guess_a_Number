import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import InputBox from './components/InputBox';
import GameBox from './components/GameBox';
import GameOverScreen from './components/GameOverScreen';
import constants from './constants';

export default function App() {
	const [ screenSelected, updateScreen ] = useState(constants.INPUT_SCREEN);
	const [ numRounds, setNumRounds ] = useState(0);
	const [ numberValue, adjustNumberValue ] = useState(-1);

	let Component = InputBox;
	if (!screenSelected) Component = GameBox;
	if (screenSelected === 1) Component = GameOverScreen;

	return (
		<View style={styles.container}>
			<Header title="Guess a Number" />
			<Component
				updateScreen={updateScreen}
				adjustNumber={adjustNumberValue}
				number={numberValue}
				rounds={numRounds}
				setNumRounds={setNumRounds}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});
