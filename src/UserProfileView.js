import React from 'react'
import { StyleSheet, Text, View,Button,TouchableOpacity,TouchableHighlight,Image,SafeAreaView } from 'react-native'

const UserProfileViewButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.customButton}>
      <Text style={styles.customButtonText}>{title}</Text>
  </TouchableOpacity>
);
const  UserProfileView = () => {
  return (
    <SafeAreaView style={{flex:1}} >
        <View style={{flex:0.5,justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity style={styles.cornerButton}>
        <Image source={require('my-app/assets/arrow.png')} />
        </TouchableOpacity>
          <Image source={require('my-app/assets/icon.png')} style = {styles.profilePhoto}/>
          <View style={styles.userBox}>
          <Text style={styles.user}>nazwa użytkownika</Text>
          </View>
        </View>
        <View style={styles.buttonSection}>
            <UserProfileViewButton title="Moje Konto"/>
            <UserProfileViewButton title="Zapisane"/>
            <UserProfileViewButton title="Progres"/>
            <UserProfileViewButton title="Język"/>
            <UserProfileViewButton title="WYLOGUJ"/>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  profilePhoto:{
    height:150,
    width:150,
    borderRadius:100,
    shadowColor:100
  },
  buttonSection:{
    backgroundColor:"lightblue",
    flex:0.5,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    justifyContent:"center",
    alignItems:"center",
  },
  user:{
      fontSize:20,
      textDecorationLine: 'underline',
  },
  userBox:{
    marginTop:15,
    borderBottomColor:"black",
    
  },
  customButton: {
    backgroundColor:"#dbebf9",
    width:300,
    height:55,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    margin:5,
  },
  customButtonText:{
    fontSize:20,
    color:"#6b8498",
  },
  cornerButton:{
      backgroundColor:"lightblue",
      height:100,
      width:100,
      alignSelf:"flex-start",
      alignItems:"center",
      justifyContent:"center",
      borderBottomEndRadius:100,
  },


})
export default UserProfileView;