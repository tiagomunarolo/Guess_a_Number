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

	return (
		<Card cardBox={styles.cardBox}>
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
			<StartResetBox props={{ ...props, unSetNumber: setNumberValue, number: number }} />
		</Card>
	);
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
