import { StyleSheet, TextInput } from "react-native";
import React from 'react'

export default function MyInput({MyChange, myholder, keyType}) {
  return (
    <TextInput placeholder= {myholder} keyboardType={keyType} onChangeText={MyChange} style ={styles.box}></TextInput>
  )
}

const styles = StyleSheet.create({
    box:{
      textAlign:'center' ,
      backgroundColor: "white", 
      borderColor:"black", 
      borderWidth:2, 
      width: 200, 
      borderRadius: 10, 
      margin: 1, padding: 1, 
      color: "black"
    }
  });


