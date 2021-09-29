import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import Card from './Card';
import StartResetBox from './StartResetBox';

export default function InputBox(props) {
	const [ number, updateNumber ] = useState('');

	const setNumberValue = (data) => {
		if (data) updateNumber(parseInt(data));
		else updateNumber('');
	};

	const unSetNumber = () => {
		updateNumber('');
	};
	const input = () => {
		return (
			<View style={styles.inputBox}>
				<TextInput
					autoFocus={true}
					keyboardType="number-pad"
					onChangeText={setNumberValue}
					value={number.toString()}
					maxLength={2}
					textAlign="center"
				/>
			</View>
		);
	};

	const button = () => {
		return (
			<StartResetBox
				setNumber={props.setNumber}
				adjustNumber={props.adjustNumber}
				unSetNumber={unSetNumber}
				number={number}
			/>
		);
	};

	return <Card cardBox={styles.cardBox} input={input} button={button} />;
}

const styles = StyleSheet.create({
	cardBox: {
		width: 200,
		height: 150
	},
	inputBox: {
		marginTop: 10,
		textAlign: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		width: '30%',
		height: 50,
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 10
	}
});
