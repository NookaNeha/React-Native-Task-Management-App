import React, { useState,useEffect,useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView,ScrollView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { auth } from '../../firebase';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("")
    const signIn = () => { 
        auth
        .signInWithEmailAndPassword(email,password)
        .catch(error =>alert(error.message))
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        
        })
    },
    [navigation])

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((authUser)=>{
            console.log(authUser);
            if(authUser){
                navigation.replace("Home")
            }
        });
        return unsubscribe;
        },
    [])
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
                <Input placeholder="Password" secureTextEntry type="password"
                    value={password} onChangeText={text => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>
            <Button title="Login" raised containerStyle={styles.button} onPress={signIn} />
            <Button title="Register" type="outline" containerStyle={styles.button} onPress={
                () => navigation.navigate("Signin")
            } />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {
        width: 300
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
    }
})