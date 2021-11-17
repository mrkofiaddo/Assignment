import React from 'react'
import { View, Text, StyleSheet,TextInput, TouchableOpacity,ImageBackground} from 'react-native'

const SignIn = ({navigation}) => {

    function navigate(){
        navigation.navigate('Sign Up')
    }

    return (
        <ImageBackground source={require('../Assets/Images/bla.png')} style={styles.imageStyle} >
            <View>
        
            </View>


            <View >
                <Text style={styles.text}>
                Hey There! {'\n'}
                Welcome {'\n'}
                    back
                </Text>
                <View style={styles.Form}>
                    <TextInput placeholder = {'Email*'} placeholderTextColor={'white'} style={styles.textinput}/>
                    <TextInput placeholder = {'Password*'} secureTextEntry={true} placeholderTextColor={'white'} style={styles.textinput}/>
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('homescreen')}>
                        <Text style={styles.buttonText}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.signupstyle}>
                        <Text style={styles.signupText} onPress={navigate}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    mainView: {
        marginTop:40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    imageStyle:{
        resizeMode: 'contain',
        width: '100%',
        height:'100%'
        
       
    },
    text:{
        color:'#fff',
        fontSize:30,
        marginTop:450,
        marginLeft: 30,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    Form:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
         alignItems: 'center',
         marginTop:20,
         
    },
    textinput:{
        width: '90%',
        borderWidth: 1,
        borderColor: 'white',
        height: 52,
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 20,
        fontStyle: 'italic',
        marginTop:20,
        color:'white'
    },
    Button:{
        color: 'black',
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderRadius:20,
        marginTop:20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    signupText:{
        color: 'gray',
        
    },
    signupstyle:{
        width: '100%',
        alignItems: 'center',
        display:'flex',
        marginTop: 20

    }

})

export default SignIn
