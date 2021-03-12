import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, ScrollView ,View,Image,TouchableOpacity} from 'react-native'

import {auth,db} from "../../firebase"

const MyAccount = ({navigation}) => {

  const settingsOptions=[
    {  }
  ]
    useLayoutEffect(()=>{
        navigation.setOptions({
                title:"Account",
            });
        }, [navigation])
        
        const signOutUser = ()=>{
            auth.signOut().then(()=>{
                navigation.replace("First")
            })
        }
    return (

        <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.userImg}
          source={{uri: auth?.currentUser?.photoURL }}
        />
        <Text style={styles.userName}>{auth?.currentUser?.displayName}</Text>
        <Text style={styles.email}>{auth?.currentUser?.email}</Text>
        <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.userBtn} onPress={signOutUser}>
                <Text style={styles.userBtnTxt}>Logout</Text>
              </TouchableOpacity>
        </View>
        </ScrollView>
       
    )
}

export default MyAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
      },
      userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
      },
      userName: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
      },
      email: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 10,
      },
      userBtn: {
        borderColor: '#2577c4',
        alignContent:"center",
        borderWidth: 2,
        width:100,
        borderRadius: 3,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        marginVertical: 12,
      },
      userBtnTxt: {
        color: '#2577c4',
        fontWeight: "800",
        alignSelf:"center",
        fontSize:16
      },
      buttonContainer:{
          flexDirection:"row"
      }
})
