import React,{useState,useLayoutEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,KeyboardAvoidingView } from 'react-native'
import {Button,Input,Image,Text} from 'react-native-elements'
import { auth } from '../firebase';


const SignUpScreen = ({navigation}) => {
    
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

    const register=()=>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL : imageUrl || "https://banner2.cleanpng.com/20180714/fok/kisspng-computer-icons-question-mark-clip-art-profile-picture-icon-5b49de29708b76.026875621531567657461.jpg"
            })

        }).catch(error =>alert(error.message))
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style= "light" />
        <Text h2 style={{fontWeight: "600",marginBottom:30,marginTop:20}}>Create a Trello account</Text>
        <Image source={{ uri: "https://www.itssimplyplaced.com/wp-content/uploads/2015/03/Trello-Logo.jpg" }}
                style={{ width: 400, height: 200,resizeMode: 'contain', }}
            />
        <View style={styles.inputContainer}>
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
        <Button title="Sign in" raised containerStyle={styles.button}  onPress= {register} />
        <Button title="Log in" type="outline" containerStyle={styles.button} onPress={
            ()=>navigation.navigate("Login")
            } />
        <View style={{height:100} }/>
    </KeyboardAvoidingView>
    )
}

export default SignUpScreen

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

