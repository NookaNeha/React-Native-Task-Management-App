import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {SimpleLineIcons,Ionicons} from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const HomeScreen = ({navigation}) => {

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
                             <TouchableOpacity activeOpacity={0.5}
                        onPress={props.navigation.toggleDrawer()}
                         >
                       <Ionicons  name="menu" size={24} color="white" />
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
            <Text>HomeScreen</Text>
        </View>
    )
}

const Drawer = createDrawerNavigator();
export default function App() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({})
