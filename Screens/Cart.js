import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, Button} from 'react-native'
import  {FlatList}  from 'react-native-gesture-handler'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import Crafts from '../Assets/consts/Crafts'
import AmountSelector from '../Assets/consts/amountSelecter'
const Cart = ({navigation}) => {
    
    const CartCard= ({item}) =>{
       
        
    
        return <View style={styles.CartCard}>
            <Image source={item.image}
            style={{height: 80, width: 80}}/>
            <View style={{height: 120, marginLeft: 10, paddingVertical: 20, flex: 1, marginBottom: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>{item.name}</Text>
                <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 16}}>{item.title}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>GHC{item.price}</Text>
            </View>
            <View style={{marginLeft: 30, alignItems: 'center', backgroundColor: 'white', marginTop: 50}}>
            <AmountSelector />
            </View>
        </View>;
        
    };
    return (
        <SafeAreaView style={{backgroundColor: '#fec813', flex: 1}}>
            <View style={styles.header}>
                <Icon name= 'chevron-left' size={28}/>
                <Text style= {{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
            </View>
            <FlatList 
                    contentContainerStyle={{paddingBottom: 80}}
                    showsVerticalScrollIndicator= {false}
                    data={Crafts}
                    renderItem={({item})=> <CartCard item={item} />}
                ListFooterComponent={()=> <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between',  marginVertical: 15}}>
                    <Text style={{color:'black', marginLeft: 20, marginTop: 20, fontSize: 20, fontWeight: 'bold'}}>Total Price GHC 3,500</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button
        title="Go to Checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
                    
                    </View>}
                />
        </SafeAreaView>
    );
};
const styles= StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    CartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionBtn: {
        width: 80,
        height: 30,
        backgroundColor: '#fec813',
        borderRadius: 10,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Cart
