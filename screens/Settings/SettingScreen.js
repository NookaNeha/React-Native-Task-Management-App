import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {auth,db} from "../../firebase"
import { Button} from 'react-native-elements'
const SettingScreen = () => {

    const signOutUser = ()=>{
        auth.signOut().then(()=>{
            navigation.replace("First")
        })
    }
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <Button title="Sign Out" onPress={signOutUser} />
        </View>
    )
}

export default SettingScreen
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
})
