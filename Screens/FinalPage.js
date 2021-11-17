import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'

const FinalPage = ({navigation}) => {
    return (
        <View style={{alignContent:'center',alignItems:'center',justifyContent:'center', flex: 1}}>
            <Text>Thank You for your Order</Text>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('homescreen')}>
                        <Text style={styles.buttonText}>
                            Return to Home
                        </Text>
                    </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
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
}
})

export default FinalPage
