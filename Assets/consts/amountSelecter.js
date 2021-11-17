import React,{useState} from 'react'
import { View,Pressable,Text, StyleSheet} from 'react-native'
import Crafts from './Crafts';



    const AmountSelector = () => {
        const [quantity, setQuantity] = useState(1) //Whatever i set it only sets it to 1. If i set it to 0 then its 0.
        const onMinus = () => setQuantity(prev => (prev > 1 ? (prev - 1) : prev));
        const onPlus = () => setQuantity(prev => prev + 1);
    
         

    return (
        <View style={styles.root}>
           <Pressable onPress={onMinus} style={styles.button}>
               <Text style={styles.buttonText}>-</Text>
           </Pressable> 
           <Text style={styles.days}>{quantity}</Text>

           <Pressable onPress={onPlus} style={styles.button}>
               <Text style={styles.buttonText}>+</Text>
           </Pressable> 
        </View>
    );
};

const styles = StyleSheet.create({
root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 100,

},

button:{
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fec813',
    borderRadius: 10,
    

},

buttonText:{
    fontSize: 18,
    color:'black',
},

days:{
    color:'black'

}

});

export default AmountSelector
