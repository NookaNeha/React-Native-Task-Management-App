import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TeamsScreen = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
                title:"Teams",
            });
        }, [navigation])
    return (
        <View>
            <Text>Dummy</Text>
        </View>
    )
}

export default TeamsScreen

const styles = StyleSheet.create({})
