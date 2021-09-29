import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const StartResetButton = (props) => {
	const numberInput = props.numberInput;
	const lowerHandler = props.lowerHandler;
	const higherHandler = props.higherHandler;

	return (
		<View style={styles.buttonContainer}>
			<Button title="Lower" color="red" onPress={() => lowerHandler(numberInput)} />
			<Button title="Higher" onPress={() => higherHandler(numberInput)} />
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		padding: 30,
		marginBottom: 0,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-around'
	}
});

export default StartResetButton;
