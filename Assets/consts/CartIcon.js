import React from 'react'
import { View, Text } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

const CartIcon = (props) => {
    return (
        <View style={{padding:2}}>
          
        <View style={{ position:'absolute',
                        height:30,
                        width:30,
                        borderRadius:15,
                        backgroundColor:'rgba(95,197,123,0.8)',
                        right:15,
                        buttom:15,
                        alignItems:'center',
                        justifyContent:'center',
                        zIndex:1000}}>
            <Text style={{color:'white',fontWeight:'bold'}}>0</Text>
        </View>
        <Icon name= 'cart' size ={30}/>
        </View>
    )
}

export default CartIcon
