import React from 'react';
import { StyleSheet, Button, Switch,View, SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Separator = () => (
  <View style={styles.separator} />
);

class SettingsView extends React.Component{
  state = {
    activeSwitch: null,
  }

toggleSwitch = (switchNumber) => {
  this.setState({
    activeSwitch: switchNumber === this.state.activeSwitch ? null : switchNumber
  })
};

  switchOne = (value) => { this.toggleSwitch(1) };
  switchTwo = (value) => { this.toggleSwitch(2) };
  
  render() {  
   
    return (  
    
   
  <SafeAreaView style={styles.container}>
    <View style={styles.top}>
       <Icon  name="left" color="white" size={40} />
    </View>
     <Separator></Separator>
     <Separator></Separator>
    <View style={styles.screen}>
   
          <Icon style={styles.icon} name="bells" color="white" size={25} />
       <Text style={styles.title}>  Przypomnienie</Text>
       <Switch
           onValueChange={this.switchOne}
           value={this.state.activeSwitch === 1} style={styles.switch}/>

    </View>
   <Separator></Separator>
    <View style={styles.screen}>
   
          <Icon  style={styles.icon} name="clockcircleo" color="white" size={25} />
       <Text style={styles.title}>  Czas przypomnienia</Text>
       <Text style={styles.switch}>19:30</Text>
       <Icon style={styles.icon} name="right" color="white" size={25} />
    </View>
    <Separator></Separator>
    <View style={styles.screen}>
   
   <Icon style={styles.icon} name="sound" color="white" size={25} />
<Text style={styles.title}>  Efekty dzwiękowe</Text>
<Switch
    onValueChange={this.switchTwo}
    value={this.state.activeSwitch === 2} style={styles.switch}/>

</View>
<Separator></Separator>
<Separator></Separator>
<View style={styles.screen}>
   
   <Icon style={styles.icon} name="upload" color="white" size={25} />
<Text style={styles.title}>  Udostępnij!</Text>

</View>
<Separator></Separator>
<View style={styles.screen}>
   
   <Icon style={styles.icon} name="notification" color="white" size={25} />
<Text style={styles.title}>  Feedback</Text>

</View>
<Separator></Separator>
<Separator></Separator>
<View style={styles.screen}>
   
   <Icon style={styles.icon} name="questioncircleo" color="white" size={25} />
<Text style={styles.title}>  Pomoc</Text>

</View>
<Separator></Separator>
<View style={styles.screen}>
   
   <Icon style={styles.icon} name="filetext1" color="white" size={25} />
<Text style={styles.title}>  Zasady i warunki</Text>

</View>
<Separator></Separator>
<View style={styles.screen}>
   
   <Icon style={styles.icon} name="lock1" color="white" size={25} />
<Text style={styles.title}>  Polityka prywatności</Text>

</View>
<Separator></Separator>
<View style={styles.screenred}>
   
   <Icon style={styles.icon} name="delete" color="white" size={25} />
<Text style={styles.title}>  USUŃ KONTO</Text>

</View>

  </SafeAreaView>
    );
}
}
export default SettingsView;
const styles = StyleSheet.create({
  top:{
    width: 415,
    height: 60,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
    backgroundColor: '#619EC6',
  },
  switch:{
    alignItems:'flex-end',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    fontSize: 22,
    color: 'white',
  },
  icon:{
    marginBottom: 'auto',
    textAlign: "right"
  },
  screen: {
    flexDirection: "row",
    marginHorizontal: 20,
    width: 370,
    height: 60,
    padding: 10,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#619EC6',
  },
  screenred: {
    flexDirection: "row",
    marginHorizontal: 20,
    width: 370,
    height: 60,
    padding: 10,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#e35959',
  },
  
  container: {
    flex: 1,
    position: 'absolute',
    
  },
  title: {
    marginBottom: 12,
    fontSize: 25,
    color: 'white',
  },
  separator: {
    marginVertical: 6,
   
  },
});