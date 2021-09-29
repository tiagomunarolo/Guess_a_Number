import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Card(props) {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.cardContainer}>
				<View style={{ ...styles.cardBox, ...props.cardBox }}>
					{props.children}
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		alignItems: 'center'
	},
	cardBox: {
		marginVertical: 20,
		shadowColor: 'blue',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 10,
		borderRadius: 20,
		backgroundColor: '#f2e6ff'
	}
});
