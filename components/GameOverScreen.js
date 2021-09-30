import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import constants from '../constants';

export default (GameOverScreen = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.containerImage}>
				<Image source={require('../assets/gameover.webp')} style={styles.image} />
			</View>
			<View style={styles.textContainer}>
				<Text>
					Machine took {props.round} to discover number {props.number}
				</Text>
			</View>
			<View style={styles.button}>
				<Button title="New Game" color="white" onPress={() => props.setNumber(constants.INPUT_SCREEN)} />
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	containerImage: {
		overflow: 'hidden',
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 10,
		borderColor: 'pink',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		resizeMode: 'repeat'
	},
	textContainer: {
		padding: 30
	},
	button: {
		borderRadius: 20,
		borderWidth: 1,
		backgroundColor: 'pink'
	}
});
