import React from "react";
import {StatusBar} from "react-native";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {OnBoarding} from "../onboarding";
import { Preload } from "../../../platform-specific/preload";

const Stack = createStackNavigator();

const onboardingOpts = {
    headerShown: false
};

const Main = () => {
    return (
    <Preload>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="OnBoarding"
                    component={OnBoarding}
                    options={onboardingOpts}
                />
            </Stack.Navigator>
            <StatusBar />
        </NavigationContainer>
    </Preload>        
    );    
};

export {Main};
