import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';


const AddToCartBtn = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...styles.btnContainer, backgroundColor: 'white'}}>
        <Text style={{...styles.title, color: 'black'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.btnContain}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>

  )}

const styles = StyleSheet.create({
    title: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 18
    },
    btnContain: {
      height: 60,
      backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnContainer: {
        width: 200,
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 20,        
    },
    NotebtnContainer: {
      flexDirection: 'row',
        backgroundColor: '#5451d6',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignItems: 'center',
    },
    titlet: {
      fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 5,
    },
    categoryItemBtn: {
      flexDirection: 'row',
      backgroundColor: 'ash',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 12,
      overflow: 'hidden',
      alignItems: 'center',
    },
    categoryText: {
      fontSize: 13,
      fontWeight: 'bold',
      color: 'white',
      marginLeft: 5,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent:  'space-between',
    padding: 20,

},
});
export default {AddToCartBtn, PrimaryButton};