import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import {SimpleLineIcons,Ionicons} from '@expo/vector-icons'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
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
                title:"Home",
                headerStyle:{
                    backgroundColor:"#2577c4"
                },
                headerTitleStyle:{color:"white"},
                headerTintColor:{color:"white"},
                headerLeft : ()=>(
                    <View style={{marginLeft:20}}>
                        <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
                        <Avatar rounded source={{uri: auth?.currentUser?.photoURL }} />
                        </TouchableOpacity>
                    </View>
                ),
                headerRight : ()=>(
                    <View 
                    style={{marginRight:20,
                        width:80,
                        justifyContent:'space-between',
                        flexDirection:'row'
                    
                    }}>
                        <TouchableOpacity activeOpacity={0.5}
                        //  onPress={signOutUser}
                         >
                       <Ionicons  name="search-sharp" size={24} color="white" />
                        </TouchableOpacity>
    
                        <TouchableOpacity activeOpacity={0.5} 
                         onPress={()=>
                             {}
                         }
                        >
                       <SimpleLineIcons  name="bell" size={18} color="white"
                       onPress={()=>
                        {}} />
                        </TouchableOpacity>
    
                    </View>
                ),
            });
        }, [navigation])

    return (
        <View>
            Home
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({})