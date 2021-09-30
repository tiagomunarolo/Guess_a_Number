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
				<Text style={styles.base}>
					Machine took <Text style={styles.important}>{props.rounds}</Text> Rounds to discover number{' '}
					<Text style={styles.important}>{props.number}</Text> !!
				</Text>
			</View>
			<View style={styles.button}>
				<Button title="NEW GAME" color="white" onPress={() => props.updateScreen(constants.INPUT_SCREEN)} />
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
		padding: 30,
		textAlign: 'center'
	},
	button: {
		borderRadius: 20,
		borderWidth: 2,
		borderColor: 'pink',
		backgroundColor: '#ff66ff',
		fontWeight: '900',
		shadowOpacity: 0.2
	},
	base: {
		padding: 20,
		fontSize: 25
	},
	important: {
		fontSize: 25,
		color: 'blue',
		fontWeight: 'bold'
	}
});
