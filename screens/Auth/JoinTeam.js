import React, { useState,useEffect,useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView,ScrollView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { auth } from '../../firebase';

const JoinTeam = ({ navigation }) => {

    const [Team, setTeam] = useState('');
  
    const check = () => { 
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
                <Text>Create or join one Team</Text>
                <Input placeholder="Email" autofocus type="text"
                    value={Team} onChangeText={text => setTeam(text)}
                />
            </View>
            <Button title="Login" raised containerStyle={styles.button} onPress={check} />
            <Button title="Create One" type="outline" containerStyle={styles.button} onPress={
                () => navigation.navigate("CreateTeam")
            } />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default JoinTeam

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