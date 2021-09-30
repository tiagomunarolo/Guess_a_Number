import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import constants from '../constants';

export default (StartResetBox = (props) => {
	const propsOverride = props.props;
	return (
		<View style={styles.buttonContainer}>
			<Button title="Reset" color="red" onPress={() => propsOverride.unSetNumber()} />
			<Button
				title="Start"
				onPress={() => {
					propsOverride.setNumber(constants.GAME_SCREEN);
					propsOverride.adjustNumber(propsOverride.number);
					console.log("Starting Game! Let's guess: ", propsOverride.number);
				}}
			/>
		</View>
	);
});

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-around',
		marginLeft: 0
	}
});
