import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import WelcomeSvg from './WelcomeSvg'

const WelcomeView = () => (
  <SafeAreaView style={ styles.container }>
    <StatusBar />
    <WelcomeSvg style={ styles.backgroundSvg }/>
    <Text style={ styles.welcomeText }>Witaj XYZ!</Text>
  </SafeAreaView>
);

export default WelcomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundSvg: {
    position: "absolute"
  },
  welcomeText: {
    fontSize: 35
  },
});
