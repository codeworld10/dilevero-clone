import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import Rescards from "./Rescards";

const Featpro = ({ title, description }) => {
  return (
    <View>
    <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:15, marginTop:10 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
      <AntDesign name="arrowright" size={24} color="black" />
     
    </View>
    <Text style={{ fontSize: 12, color: "grey", paddingHorizontal:15 }}>{description}</Text>
    
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={{paddingHorizontal:15, paddingVertical:10, paddingBottom:20, height:"auto"}}
    >
     <Rescards 
     id="1"
     imgUrl="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      title="Yummy Food"
        rating="4.5"
        genre="Pakistani"
        adress="Nearby Street 1"
        shortDescription="00"
        dishes="00"
        long="00"
        lat="00"
     />
     <Rescards 
     id="2"
     imgUrl="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
     title="Yummy Food"
        rating="4.5"
        genre=""
        adress=""
        shortDescription=""
        dishes=""
        long=""
        lat=""
     />
     <Rescards 
     id="3"
     imgUrl="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
     title="Yummy Food"
        rating="4.5"
        genre=""
        adress=""
        shortDescription=""
        dishes=""
        long=""
        lat=""
     />
    
    </ScrollView>
    
    </View>
  );
};

export default Featpro;
