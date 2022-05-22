import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	ImageBackground,
	ScrollView,
	Pressable,
} from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('screen');

const LevelView = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			pagingEnabled
			bounces={false}
		>
			<View style={styles.container}>
				<ImageBackground
					source={require('../assets/levelViewBg1.png')}
					resizeMode='cover'
					style={styles.imgBg}
				>
					<View style={styles.gradeLevelContainer}>
						<View style={styles.titleBox}>
							<Text style={styles.titleText}>Podstawówka</Text>
						</View>
						<View style={styles.levelsContainer}>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>VII</Text>
							</Pressable>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>VIII</Text>
							</Pressable>
						</View>
					</View>
				</ImageBackground>
			</View>
			<View style={styles.container}>
				<ImageBackground
					source={require('../assets/levelViewBg2.png')}
					resizeMode='cover'
					style={styles.imgBg}
				>
					<View style={styles.gradeLevelContainer}>
						<View style={styles.titleBox}>
							<Text style={styles.titleText}>Szkoła średnia</Text>
						</View>
						<View style={styles.levelsContainer}>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>I</Text>
							</Pressable>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>II</Text>
							</Pressable>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>III</Text>
							</Pressable>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>IV</Text>
							</Pressable>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>V</Text>
							</Pressable>
						</View>
					</View>
				</ImageBackground>
			</View>
			<View style={styles.container}>
				<ImageBackground
					source={require('../assets/levelViewBg3.png')}
					resizeMode='cover'
					style={styles.imgBg}
				>
					<View style={styles.gradeLevelContainer}>
						<View style={styles.titleBox}>
							<Text style={styles.titleText}>Studia</Text>
						</View>
						<View style={styles.levelsContainer}>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>I</Text>
							</Pressable>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>II</Text>
							</Pressable>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>III</Text>
							</Pressable>
							<Pressable style={styles.levelBox}>
								<Text style={styles.levelText}>IV</Text>
							</Pressable>
						</View>
					</View>
				</ImageBackground>
			</View>
		</ScrollView>
	);
};

export default LevelView;

const styles = StyleSheet.create({
	container: {
		width: width,
		height: height,
		alignItems: 'center',
	},
	imgBg: {
		flex: 1,
	},
	gradeLevelContainer: {
		width: width,
		height: height,
		padding: '10%',
	},
	titleBox: {
		backgroundColor: '#729FC4',
		padding: 15,
		borderRadius: 20,
		marginTop: '55%',
		marginBottom: 25,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 4,
		shadowOpacity: 0.5,
	},
	titleText: {
		textAlign: 'center',
		width: '100%',
		color: '#ffffff',
		fontSize: 38,
	},
	levelsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	levelBox: {
		height: 100,
		width: 100,
		margin: 10,
		backgroundColor: '#C4C4C4',
		borderRadius: 20,
		justifyContent: 'center',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 2,
		shadowOpacity: 0.3,
	},
	levelText: {
		color: '#FFFFFF',
		fontSize: 38,
		textAlign: 'center',
	},
});
