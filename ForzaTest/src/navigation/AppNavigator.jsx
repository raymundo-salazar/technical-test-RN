import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PopularMovies } from "../pages/PopularMovies";
import { DetailMovie } from "../pages/DetailMovie";

export const AppNavigator = () => {
    const stack = createStackNavigator();

    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Movies" component={PopularMovies} />
                <stack.Screen name="Detail" component={DetailMovie} />
            </stack.Navigator>
        </NavigationContainer>
    )
}