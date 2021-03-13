import React, { useLayoutEffect,useEffect } from 'react'
import { StyleSheet, Text, View, Image,TouchableWithoutFeedback } from 'react-native'
import { Button, ThemeProvider } from 'react-native-elements'
import { auth } from '../../firebase';
const FirstScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, [navigation])
    const theme = {
        Button: {
            raised: true,
        },
    };
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((authUser)=>{
            console.log(authUser);
            if(authUser){
                navigation.replace("Home")
            }
        });
        return unsubscribe;
        },
    [])
    return (
        <View style={styles.container}>
            <View style={{ height: "20%", width: "100%" }}></View>
            <View style={styles.textContainer}>
                <Text style={{ fontWeight: "600", fontSize: 24, color: "white", paddingBottom: 5 }}>Hello Trello!</Text>
                <Text style={{ fontWeight: "400", fontSize: 18, color: "white" }}>Ready to start getting stuff done?</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: "https://blog.trello.com/hs-fs/Ed%20Cal%20Blog%20Post/trello-ed-cal.png" }} />
            </View>

            <View style={styles.buttonContainer}>
                <ThemeProvider theme={theme}>
                    
                    <Button title="Sign up" type="raised"
                        containerStyle={styles.button}
                        onPress={
                            () => navigation.navigate("Signin")
                        } />
                        <Button title="Log in" type="raised"
                        containerStyle={styles.button}
                        onPress={
                            () => navigation.navigate("Login")
                        } />
                </ThemeProvider>
            </View>
            <View style={styles.forgetpw}>
               <TouchableWithoutFeedback  onPress={ () => navigation.navigate("ForgetPassword")}> 
               <Text style={{fontSize:18,color:"white",fontWeight: 'bold',textDecorationLine: 'underline'}}>Forget Password?</Text>
               </TouchableWithoutFeedback> 
            </View>
            <View style={styles.forgetpw}>
               <TouchableWithoutFeedback  onPress={ () => navigation.navigate("RegisterOrg")}> 
               <Text style={{fontSize:18,color:"white",fontWeight: 'bold',textDecorationLine: 'underline'}}>Register your Organization</Text>
               </TouchableWithoutFeedback> 
            </View>
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2577c4",
        flex: 1,
        flexDirection: 'column'
    },
    button: {
        width: 130,
    },
    buttonContainer: {
        paddingTop: "40%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30

    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 400,
        height: 200
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30
    },
    forgetpw:{
        marginTop:20,
        justifyContent:'center',
        alignItems:"center"
    }
})