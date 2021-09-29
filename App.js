import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import InputBox from './components/InputBox';
import GameBox from './components/GameBox';

export default function App() {
	const [ numberSet, numberSetMethod ] = useState(false);
	const [ numberValue, adjustNumberValue ] = useState(-1);

	let Component = InputBox;
	if (numberSet) Component = GameBox;

	return (
		<View style={styles.container}>
			<Header title="Guess a Number" />
			<Component setNumber={numberSetMethod} adjustNumber={adjustNumberValue} number={numberValue} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});
