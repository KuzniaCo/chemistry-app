import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import React from 'react';

const Register = () => {
	return (
		<View style={styles.container}>
			<View>
				<TextInput
					style={styles.input}
					placeholder='nazwa użytkownika'
					placeholderTextColor='#3A5163'></TextInput>
			</View>
			<View>
				<TextInput
					style={styles.input}
					placeholder='email'
					placeholderTextColor='#3A5163'></TextInput>
			</View>
			<View>
				<TextInput
					style={styles.input}
					placeholder='hasło'
					placeholderTextColor='#3A5163'></TextInput>
			</View>
			<View>
				<TextInput
					style={styles.input}
					placeholder='powtórz hasło'
					placeholderTextColor='#3A5163'></TextInput>
			</View>
			<Pressable style={styles.registerButton}>
				<Text style={styles.registerButtonText}>Zarejestruj się</Text>
			</Pressable>
			<Pressable>
				<Text style={styles.loginButtonTest}>LOGOWANIE</Text>
			</Pressable>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		backgroundColor: '#90CAF8',
		paddingTop: 65,
	},
	input: {
		width: 225,
		height: 20,
		marginBottom: 40,
		textAlign: 'center',
		borderBottomWidth: 2,
		fontSize: 18,
	},
	registerButton: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 220,
		height: 55,
		backgroundColor: '#466178',
		borderRadius: 10,
		marginBottom: 95,
	},
	registerButtonText: {
		color: 'white',
		fontSize: 26,
	},
	loginButtonTest: {
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
