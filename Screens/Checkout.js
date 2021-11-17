import React from 'react'
import { View, Text, StyleSheet,ScrollView,TextInput, TouchableOpacity, ImageBackground} from 'react-native'
const Checkout = ({navigation}) => {

    return (
        <ImageBackground source={require('../Assets/Images/neeewww.png')} style={styles.imageStyle} >
       
        <ScrollView>
        <Text style={styles.text}>
                    Heya, {'\n'}
                    Enter the following details to confirm order!
                </Text>
                <View style={styles.Form}>
                    <TextInput placeholder = {'Address*'} placeholderTextColor={'white'} style={styles.textinput} />
                    <TextInput placeholder = {'payment method*'} placeholderTextColor={'white'} style={styles.textinput}/>
                    <TextInput placeholder = {'Mobile*'} placeholderTextColor={'white'} style={styles.textinput} keyboardType={'phone-pad'} maxLength={10} />
                    <TextInput placeholder = {'Got a promo code?*'} secureTextEntry={true} placeholderTextColor={'white'} style={styles.textinput}/>
                    <TextInput placeholder = {'Any request for the store?*'} secureTextEntry={true} placeholderTextColor={'white'} style={styles.textinput}/>
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('FinalPage')}>
                        <Text style={styles.buttonText}>
                            Confirm order
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>

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
        resizeMode:'contain',
        width: '100%',
        height: '100%'
        
       
    },
    text:{
        color:'#fff',
        fontSize:30,
        marginTop:300,
        marginLeft: 30,
        fontStyle: 'italic',
        
        fontWeight: 'bold'
    },
    Form:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
         alignItems: 'center',
         
         
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

export default Checkout
