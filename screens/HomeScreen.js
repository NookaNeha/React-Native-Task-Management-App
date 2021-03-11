
import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import {auth,db} from "../firebase"
import { Button} from 'react-native-elements'
const HomeScreen = ({navigation}) => {
    const signOutUser = ()=>{
        auth.signOut().then(()=>{
            navigation.replace("First")
        })
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
                title:"Home"
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

    

