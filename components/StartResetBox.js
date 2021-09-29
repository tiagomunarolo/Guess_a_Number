import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default (StartResetBox = (props) => {
	return (
		<View style={styles.buttonContainer}>
			<Button title="Reset" color="red" onPress={props.unSetNumber} />
			<Button
				title="Start"
				onPress={() => {
					props.setNumber(true);
					props.adjustNumber(props.number);
					console.log('Starting Game! Let\'s guess: ', props.number);
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
