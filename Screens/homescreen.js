import React from "react";
import { SafeAreaView} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {
    View,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
    TouchableOpacity,} from "react-native";


import Crafts from "../Assets/consts/Crafts";
const {width} = Dimensions.get('screen');
const homescreen = ({navigation}) => {
    const categoryItems = [
        {name: 'Coaster', iconName: 'circle-outline'},
        {name: 'Notebook', iconName: 'book'},
        {name: 'Clock', iconName: 'clock'},
        {name: 'Bookmark', iconName: 'bookmark'},
    ];

    
    const ListCategories = ()=>{
        const [selectedCategoryIndex, setselectedCategoryIndex] = React.useState(0)
        return (
            <View style= {styles.categoriesContainer}>
                {categoryItems.map((item, index)=>(
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        key={index} 
                        onPress={()=>setselectedCategoryIndex(index) } >
                        <View style={styles.categoryItemBtn, {backgroundColor: selectedCategoryIndex == index ? '#dbe9f6': '#5451d6' } }>
                        <Icon name={item.iconName} size={20} color= {selectedCategoryIndex == index ? 'black': 'white'}/>
                       <Text style={[styles.categoryText, {color:selectedCategoryIndex == index ? 'black': 'white'}]}>{item.name}

                       </Text> 
                    </View>
                    </TouchableOpacity>
                    
                ))}
            </View>
        );   
    };
    
    const Card = ({Crafts})=>{
        return (
            <Pressable
            
            onPress={() => navigation.navigate('DetailsScreen', Crafts )}>
            <View style={styles.card}>
              <View style={styles.iconContainer}>
                <Icon
                  name="heart"
                  color={Crafts.liked ? '#ff0000' : 'black'}
                />
              </View>
              <Image
                source={Crafts.image}
                style={{height: 120, width: '100%', borderRadius: 10}}
              />
    
              <Text style={styles.cardName}>{Crafts.name}</Text>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.price}>{Crafts.price}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="star" color={'#ffff00'} size={18} />
                  <Text style={styles.rating}>4.3</Text>
                </View>
              </View>
            </View>
          </Pressable>
            
    )};
    const PopularItemCard = ({Crafts})=>{
        return (
            
            <View style={styles.popularItemCard}>
              <View style={styles.iconContainer}>
                <Icon
                  name="heart"
                  color={Crafts.liked ? '#ff0000' : 'black'}
                />
              </View>
              <Image
                source={Crafts.image}
                style={{
                  width: 100,
                  height: '100%',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  marginRight: 10,
                }}
              />
              <View style={{paddingVertical: 15, justifyContent: 'center'}}>
                <Text style={styles.cardName}>{Crafts.name}</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text style={styles.price}>{Crafts.price}</Text>
                  <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <Icon name="star" color={'#ffff00'} size={18} />
                    <Text style={styles.rating}>4.3</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        };
    return (
        
        <SafeAreaView style={{backgroundColor: '#4530b3', flex: 1}} >
           
            <ScrollView showsVerticalScrollIndicator = {false}>
               <Text style={styles.headerTitle}>All Crafts Are Handmade With Love</Text>
                <View 
                style={{
                    flexDirection: 'row', 
                    justifyContent:'space-between',  
                    padding: 20}}>
                    <View style={styles.searchInputContainer}>
                        <Icon name='magnify' color='black' size={22} />
                        <TextInput placeholder= "Search" color= 'black' />
                    </View>
                    <View style={styles.sortBtn}>
                        <Icon name='filter' color='white' size={22} />
                    </View>
                </View>
                <Text style={styles.title}>Categories</Text>
                <ListCategories/>
                <Text style={styles.title}>Top Designs</Text>
                <FlatList 
                    contentContainerStyle={{paddingLeft: 20}}
                    horizontal
                    showsVerticalScrollIndicator= {false}
                    data={Crafts}
                    renderItem={({item})=> <Card Crafts={item} />}
                />
                <Text style={styles.title}>Popular</Text>
                <FlatList 
                    contentContainerStyle={{paddingLeft: 20}}
                    horizontal
                    showsVerticalScrollIndicator= {false}
                    data={Crafts}
                    renderItem={({item})=> <PopularItemCard Crafts={item} />}
                />
            </ScrollView>
        </SafeAreaView>
       
        
    )
}
const styles = StyleSheet.create({
    card:{
        height: 190,
        backgroundColor: '#5451d6',
        elevation: 10,
        width: width / 2.5,
        marginRight: 20,
        padding: 10,
        marginVertical: 20,
        borderRadius: 10
    },
    cardName: {
        marginTop: 10,
        fontSize: 12,
        color: "white",
        fontWeight: 'bold',
    },
    price: {fontWeight: 'bold', color: 'white', fontSize: 12},
        rating: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 12,
    },
    categoryText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 5,
    },
    categoryItemBtn: {
        flexDirection: 'row',
        backgroundColor: '#5451d6',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignItems: 'center',
      
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent:  'space-between',
        padding: 20,

    },
    imageStyle:{
        resizeMode:'contain',
        width: '100%',
        height: '100%'
        },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        color: 'white',    
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '55%',
        lineHeight: 30,
        paddingHorizontal: 20,
        color: 'white',
    },
    searchInputContainer: {
        height: 40,
        backgroundColor: '#dbe9f6',
        flex: 1,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    sortBtn: {
        backgroundColor: '#5451d6',
        height: 40,
        width: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
   title: {
       fontSize: 18,
       fontWeight: 'bold',
       paddingHorizontal: 20,
       color: 'white',
   },
   iconContainer: {
       height: 25,
       width: 25,
       backgroundColor: 'white',
       position: "absolute",
       elevation: 2,
       right: 15,
       top: 15,
       borderRadius: 20,
       justifyContent: 'center',
       alignItems: 'center',
   },
   categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
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
popularItemCard: {
    height: 90,
    width: width - 100,
    backgroundColor: '#5451d6',
    elevation: 10,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
});
export default homescreen
