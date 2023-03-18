import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import MyInput from './src/components/myInput';
export default function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setAge] = useState("");
  const [num, setNum] = useState("");
  const image = { uri: "https://mobimg.b-cdn.net/v3/fetch/fa/fa26ee5f13d8a9bca6356f1b89caf5e5.jpeg?h=900&r=0.5" };

  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <Image source={require('./assets/favicon.png')} style={{width: 100 , height: 100}}/>
      <Text style={styles.heading}>Sign Up Form</Text>
      <MyInput myholder = "Name" MyChange={(a) => {setname(a);}}/>
      <MyInput myholder = "Email" MyChange={(a) => {setemail(a);}}/>
      <MyInput myholder = "Age" keyType="numeric" MyChange={(a) => {setAge(a);}}/>
      <MyInput myholder = "Mobile Number" keyType="numeric" MyChange={(a) => {setNum(a);}}/>
      <TouchableOpacity style = {styles.div}  onPress={() => {console.log("(1) Name: ", name, " (2) Email: ", email,"(3) Age: ", age, " (4) Number: ", num)}}>
      <Text>Sign Up</Text>
      </TouchableOpacity>
    <StatusBar style="auto"/>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
  div: {
    padding: 10,
    backgroundColor: "teal", 
    borderColor:"black", 
    width: -100,
    marginTop: 5,
    borderRadius: 10, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  heading:{
    color: "#fff", 
    padding: 10, 
    fontSize: 20, 
    fontWeight: 'bold'
  }
});

