import React, { useState,useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView,ScrollView,Alert } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { auth } from '../../firebase';
import * as firebase from 'firebase'

const ForgetPassword = ({ navigation }) => {

    const [email, setEmail] = useState('');
  
    const forgetp = () => { 
        firebase.auth().sendPasswordResetEmail(email)
        .then(
            Alert.alert("Link is sent to the registered mail Id."),
            [
                { text: 'OK', onPress: () => {} }
              ],
            )
        .catch(error =>alert(error.message))
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        
        })
    },
    [navigation])

    
    return (
        <ScrollView>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <View style={{height:"30%"}}></View>
            <Image source={{ uri: "https://www.itssimplyplaced.com/wp-content/uploads/2015/03/Trello-Logo.jpg" }}
                style={{ width: 400, height: 200,resizeMode: 'contain', }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autofocus type="email"
                    value={email} onChangeText={text => setEmail(text)}
                />
                 <Button title="RESET PASSWORD" raised containerStyle={styles.button} onPress={forgetp} />
            </View>
            <View styles={StyleSheet.btnContainer}>
            <Button title="Go back" type="outline" containerStyle={styles.button} onPress={ () => navigation.navigate("First")} />
            </View>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
        alignItems:"center"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        backgroundColor:"white"
    },
    button: {
         width: 200,
        marginTop: 10
    },
    btnContainer:{
        width: 300,
        alignItems:"center",
        justifyContent:"space-between"
    }
})