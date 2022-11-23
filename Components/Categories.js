import { View, Text, ScrollView } from "react-native";
import React from "react";
import CatCards from "./CatCards";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
   
      <CatCards
     
        imgUrl="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="Yummy"
      />
      <CatCards
        imgUrl="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="Yummy"
      />
      <CatCards
        imgUrl="https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="Yummy"
      />
      <CatCards
        imgUrl="https://images.unsplash.com/photo-1609167830220-7164aa360951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="Yummy"
      />
    </ScrollView>
  );
};

export default Categories;
