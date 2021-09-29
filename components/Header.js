import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Header(props) {
  return (
    <SafeAreaView style={styles.header}>
        <Text style={styles.text}>
            {props.title}
        </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    backgroundColor: 'pink',
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
      fontSize: 22,
      fontWeight: 'bold',
  }
});
