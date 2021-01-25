import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignUpLogin extends React.Component {
  constructor() {
      super();
      this.state = {
        emailId: "",
        password: ""
      }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password) =>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }
  
   render() {
    return (
        <View>
            <TextInput
                style={styles.textInput1}
                placeholder="example@booksanta.com"
                keyboardType ='email-address'
                onChangeText={(text)=>{
                    this.setState({
                        emailId: text
                    })
                }}
            />

            <TextInput
                style={styles.textInput2}
                secureTextEntry = {true}
                placeholder="password"
                onChangeText={(text)=>{
                    this.setState({
                        password: text
                    })
                }}
            />

            <TouchableOpacity
                style={styles.button1}
                onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            ><Text
                style={styles.buttonTexts}
            >Sign Up</Text></TouchableOpacity>

            <TouchableOpacity
                style={styles.button2}
                onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            ><Text
                style={styles.buttonTexts}
            >Login</Text></TouchableOpacity>
        </View>
    )
   }
}

const styles = StyleSheet.create({
    button1: {
        backgroundColor: "orange",
        width: 100,
        height: 25,
        textAlign: "center",
        position: "absolute",
        left: 113,
        top: 200
    },

    button2: {
        backgroundColor: "orange",
        width: 100,
        height: 25,
        textAlign: "center",
        position: "absolute",
        left: 113,
        top: 260
    },
    
    buttonTexts: {
        fontWeight: 600
    },

    textInput1: {
        position: "absolute",
        left: 80,
        width: 160,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        top: 50
    },

    textInput2: {
        position: "absolute",
        left: 80,
        width: 160,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        top: 100
    }
})