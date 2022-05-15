import { View, Text, StyleSheet, Pressable, SafeAreaView, Animated } from 'react-native';
import { React } from 'react';
import { StatusBar } from 'expo-status-bar';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const MainView = () => {
	const data = [
		{ name: '1', key: '1' },
		{ name: '2', key: '2' },
		{ name: '3', key: '3' },
		{ name: '4', key: '4' },
		{ name: '5', key: '5' },
	];
	return (
		<SafeAreaView>
			<StatusBar backgroundColor={'transparent'} translucent={false} />
			<View style={styles.hamburgerMenuContainer}>
				{/* Functionality yet to be added */}
				<Pressable>
					<FontAwesome5 name='bars' style={styles.textAlign} size={26} color='#405C73' />
				</Pressable>
			</View>
			<View style={styles.mainContainer}>
				<View style={styles.sectionBar}>
					<Text style={styles.sectionBarText}>XYZ</Text>
				</View>
				<View style={styles.popularTextContainer}>
					<Text style={styles.popularText}>Popularne</Text>
				</View>
				<Animated.FlatList
					data={data}
					contentContainerStyle={styles.popularItemsContainer}
					horizontal={true}
					renderItem={({ item }) => (
						<View style={styles.popularItem}>
							<Text>{item.name}</Text>
						</View>
					)}></Animated.FlatList>
				<View style={styles.sectionBar}>
					<Text style={styles.sectionBarText}>Materiały</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default MainView;

const styles = StyleSheet.create({
	mainContainer: {
		display: 'flex',
		alignItems: 'center',
		padding: 20,
		paddingTop: 10,
	},
	hamburgerMenuContainer: {
		width: '100%',
		paddingLeft: 25,
		marginTop: 20,
	},
	hamburgerMenu: {
		textAlign: 'left',
		color: 'white',
	},
	sectionBar: {
		justifyContent: 'center',
		width: '100%',
		height: 70,
		color: 'white',
		backgroundColor: '#729FC4',
		alignItems: 'center',
		marginVertical: 10,
		borderRadius: 20,
		shadowColor: '#171717',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 20,
		elevation: 10,
	},
	sectionBarText: {
		fontSize: 34,
		color: 'white',
	},
	popularTextContainer: {
		marginVertical: 10,
	},
	popularItemsContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexGrow: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 150,
		width: '170%',
	},
	popularItem: {
		width: 100,
		height: 120,
		borderRadius: 20,
		backgroundColor: '#697178',
		alignItems: 'center',
		justifyContent: 'center',
	},
	popularText: {
		color: '#466178',
		fontSize: 34,
	},
});
