import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {SimpleLineIcons,Ionicons} from '@expo/vector-icons'

export default HomeScreen = ({navigation}) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
                title:"Home",
                headerStyle:{
                    backgroundColor:"#2577c4"
                },
                headerTitleStyle:{color:"white"},
                headerTintColor:{color:"white"},
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
            <Text>HomeScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({})
