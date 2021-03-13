import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import {auth,db,database} from "../firebase"
import { Button} from 'react-native-elements'


const HomeScreen = ({navigation}) => {
    const signOutUser = ()=>{
        auth.signOut().then(()=>{
            navigation.replace("First")
        })
    }
    // var messagesRef = database.ref('messages');
    // const saveMessage=()=>{
    //     var newMessageRef = messagesRef.push();
    //     newMessageRef.set({
    //       name: "neha",
    //       company:"company",
    //       email:"email",
    //       phone:"phone",
    //       message:"message"
    //     });
    // }
    useLayoutEffect(()=>{
        navigation.setOptions({
                title:"Projects"
            });
        }, [navigation])

    return (
        <View>
          <Text>  Home</Text>
          <Button title="Sign Out" onPress={signOutUser} />
         
        
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})

    

