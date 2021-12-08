import React, { Component }  from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"; 
import First from "../Screen/First";
import Second from "../Screen/Second";

const Stack = createNativeStackNavigator();

const Rootstack =()=>{

    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="First" component={First} options={{headerShown:false}} />
            <Stack.Screen name="Second" component={Second}  options={{headerShown:false}} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Rootstack;