import React from 'react'
import { View,SafeAreaView, Text, StyleSheet, ImageBackground,Button} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import AddToCartBtn from '../Assets/consts/Buttons'


const DetailsScreen = ({navigation, route}) => {
    const Crafts = route.params;
    function navigate(){
        navigation.navigate('Cart')
    }
    

    return (
        
        <SafeAreaView style={{flex: 1, backgroundColor: '#64ac8c'}}>
            <View style={styles.header}>
                <View style={styles.headerbtn}>
                    <Icon name="chevron-left" size={25} onPress={navigation.goBack}/>
                </View >
                <Text style={{fontWeight:'bold', fontSize: 18, color:'white' }}>Details</Text>
            <View style={styles.headerbtn}>
                <Icon name="dots-vertical" size={25}/>
            </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={Crafts.image} style={styles.backgroundImage}>
                    <View style= {{
                        height: 60,
                        borderTopLeftRadius: 15, 
                        width: 70, 
                        backgroundColor: 'black', 
                        position: 'absolute', 
                        bottom: 0, 
                        right: 0,
                        justifyContent: 'center',
                        alignItems: 'center', }}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}> 
                            <Icon name='star' color= {'#ffff00'} size= {20}></Icon>
                            <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>3.8</Text>
                        </View>
                        <Text style={{color:'white', fontSize: 10, fontWeight: 'bold'}}>490 views</Text>
                    </View>
                </ImageBackground>
                <View style={styles.detailsContainer}>
                    <Text style={{
                        fontWeight: 'bold', 
                        fontSize: 20, 
                        color: 'white'}} >
                            {Crafts.name}
                    </Text>
                    <Text style={{
                        fontWeight: 'bold', 
                        fontSize: 15, color: 'white', 
                        marginTop: 20, 
                        marginVertical: 20}}>
                            Description
                    </Text>
                    <Text style={{
                        fontWeight: 'normal', 
                        fontSize: 15, 
                        color: 'white', 
                        lineHeight: 20,
                        }}>
                        
                        Marbled clocks {'\n'}
                        Purchase comes with freebies {'\n'}
                        Designs are made according to customer's preferences and satisfaction {'\n'}
                        Payment validates order {'\n'}
                        Order takes a week to be prepared {'\n'}
                    </Text>
                    <View style={{
                        marginVertical: 20,
                        flexDirection:'row',
                        justifyContent: 'space-between',
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: 'white',
                                fontWeight: 'bold'}}>
                                {Crafts.price}
                            </Text>
                            <View style={styles.quantityContainer}>
                                <View style={styles.quantityBtn}>
                                    <Icon name= 'plus' size={20} color= 'white'></Icon>
                                </View>
                                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>1</Text>
                                <View style={styles.quantityBtn}>
                                    <Icon name= 'minus' size={20} color= 'white'></Icon>
                                </View>
                            </View>
                    </View>
                    <View style={{flexDirection: 'row',  alignItems: 'center'}}>
                                <View style={{height: 50, 
                                    width: 50, 
                                    elevation: 7, 
                                    marginRight: 50, 
                                    color: 'white', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    borderRadius: 30,
                                    backgroundColor: 'white',
                                     }}>
                                        <Icon name= 'heart-outline' color= 'black' size={28} ></Icon>
                                        
                                </View>
                                <View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        
                                <Button
                                 title="Add to cart"
                                    onPress={() => navigation.navigate('Cart')}
                                        />
                                         </View>
                                </View>
                                
                    </View> 
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    haddToCartBtn: {
        height: 50,
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    quantityBtn: {
        height: 22,
        width: 26,
        backgroundColor: 'black',
        borderRadius: 9,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityContainer: {
        height: 25,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'space-between', 
        flexDirection: 'row',
    },
    detailsContainer:{
        flex: 1,
        paddingHorizontal: 20,
        marginTop:40,
    },
    backgroundImage: {
        marginHorizontal: 20,
        height: 300,
        borderRadius: 15,
        overflow: 'hidden',
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,   
        alignItems: 'center',
    },
   headerbtn: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default DetailsScreen