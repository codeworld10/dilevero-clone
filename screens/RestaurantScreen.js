import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

const Dishes = [
  {
    id: 1,
    name: "Burger",
    price : 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam mauris, eget aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam mauris, eget aliquam nisl nunc vel lorem.",
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
 
]


const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      adress,
      shortDescription,
      long,
      lat,
    },
  } = useRoute();
const [selectedDish,setSelectedDish] = useState(false)
const [counter, setCounter] = useState(1);
const incrementCounter = () => setCounter(counter + 1);
let decrementCounter = () => setCounter(counter - 1);
if(counter<=0) {
  decrementCounter = () => setCounter(0);
}
  return (
    <SafeAreaView>
    <ScrollView>
      <View>
        <Image
          style={{
            width: "100%",
            height: 200,
            borderRadius: 10,
            resizeMode: "contain",
          }}
          source={{ uri: imgUrl }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            paddingVertical: 6,
            paddingHorizontal: 15,
            marginTop:8
          }}
        >
          {title}
        </Text>
        <View
          style={{
            paddingHorizontal: 15,
            display: "flex",
            flexDirection: "row",
           
          }}
        >
          <Text style={{fontSize:12, color:"grey", margin:5}}>
            {rating}{genre}
          </Text>
          <Text style={{fontSize:12, color:"grey",  margin:5}}>{adress}</Text>

         
          <Text style={{fontSize:12, color:"grey",  margin:5}}>{long}</Text>
          <Text style={{fontSize:12, color:"grey",  margin:5}}>{lat}</Text>
        </View>
      </View>
      <Text style={{paddingHorizontal:15, color:"grey", fontSize:12}}>{shortDescription}</Text>
      <View style={{paddingHorizontal:15}}>
      <Text style={{fontSize:17, fontWeight:"bold",}}>Menu</Text>
        
      </View>
      <View style={{paddingHorizontal:15,}}>
      
     {Dishes.map((dish) => (
      <>
      <View style={{paddingVertical:10}}  key={dish.id}>
      <Text style={{fontSize:18, fontWeight:"bold"}}>{dish.name}</Text>
      <TouchableOpacity onPress={() => setSelectedDish(!selectedDish)}>
      <View style={{display:"flex", flexDirection:"row", alignItems:"center", }}>
      <Text style={{paddingRight:4, flex:1, fontSize:12, color:"grey"}}>{dish.description}</Text>
    
      <Image source={{uri:dish.image}} style={{width:100, height:100, borderRadius:10}}/>
      
      </View>
      <Text style={{fontWeight:"bold", fontSize:14}}>{dish.price}$</Text>
      </TouchableOpacity>
    
      
      </View> 
      <View>
      {selectedDish && (
        
         <View  style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
         <View>
         <TouchableOpacity onPress={incrementCounter}>
         <AntDesign name="pluscircle" size={28} color="#00CCBB" />
        
         </TouchableOpacity>
         </View>
         <Text style={{paddingHorizontal:5}}>{counter}</Text>
         <TouchableOpacity onPress={decrementCounter} style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
         <AntDesign name="minuscircle" size={28} color="#00CCBB" />
         </TouchableOpacity>
         </View>
    
        )}
      </View> 
      </>
  ))}
 
 
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
