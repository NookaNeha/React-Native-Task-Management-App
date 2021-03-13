import React,{useState,useLayoutEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,KeyboardAvoidingView,ScrollView } from 'react-native'
import {Button,Input,Image,Text} from 'react-native-elements'
 import { auth,database } from '../../firebase';


const RegisterOrganization = ({navigation}) => {
    const [orgName, setOrgName] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        
        })
    },
    [navigation])

    const register=(navigate)=>{
        if (orgname==='' || email==='' || password ===''|| name===''){
            alert("Fill the form first")
         }
         else{
        database.ref('/organization').push({
            orgname: orgName,
            createdBy:{
                name,
                email,
                imageUrl : imageUrl === '' ? imageUrl || "https://banner2.cleanpng.com/20180714/fok/kisspng-computer-icons-question-mark-clip-art-profile-picture-icon-5b49de29708b76.026875621531567657461.jpg" : imageUrl
            }
          }).catch(error =>alert(error.message))
        }
    }
    return (
        <ScrollView>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style= "light" />
         <View style={{height:"30%"}}></View>
        <Image source={{ uri: "https://www.itssimplyplaced.com/wp-content/uploads/2015/03/Trello-Logo.jpg" }}
                style={{ width: 400, height: 200,resizeMode: 'contain', }}
            />
        <View style={styles.inputContainer}>
        <Input placeholder="Organization name" autofocus type="text" 
            value={orgName} onChangeText={text => setOrgName(text)}
            />
            <Input placeholder="Full Name" autofocus type="text" 
            value={name} onChangeText={text => setName(text)}
            />
            <Input placeholder="Email"  type="email" 
            value={email} onChangeText={text => setEmail(text)}
            />
            <Input placeholder="Password"  type="text" 
            value={password} secureTextEntry onChangeText={text => setPassword(text)}
            />
            <Input placeholder="Profile Picture Url (optional)"  type="text"
             value={imageUrl} onChangeText={text => setImageUrl(text)}
             onSubmitEditing={register}
            />
        </View>
        <Button title="Register" raised containerStyle={styles.button}  onPress= {()=>register(navigation.navigate)} />
        <Button title="Go Back" type="outline" containerStyle={styles.button} onPress={
            ()=>navigation.navigate("First")
            } />
        <View style={{height:100} }/>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default RegisterOrganization

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