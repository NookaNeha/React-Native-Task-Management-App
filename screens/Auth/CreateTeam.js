import React, { useState,useEffect,useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView,ScrollView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { auth,db } from '../../firebase';
import * as firebase from 'firebase'
const CreateTeam = ({ navigation }) => {

    const [Team, setTeam] = useState('');
  
    const check = () => { 
        db.collection('teams').add({
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            teamName: Team,
            creator:{
                name:auth.currentUser.displayName,
                email:auth.currentUser.email,
                photoURL:auth.currentUser.photoURL,
            }
        }).then(()=>{
            navigation.navigate("Home")
        })
        .catch(e=>
            Alert.alert(e))

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
                <Text>Join  Team</Text>
                <Input placeholder="Team Name" autofocus type="text"
                    value={Team} onChangeText={text => setTeam(text)}
                />
            </View>
            <Button title="Join" raised containerStyle={styles.button} onPress={check} />
            <Button title="Create One" type="outline" containerStyle={styles.button} onPress={
                () => navigation.navigate("JoinTeam")
            } />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default CreateTeam

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