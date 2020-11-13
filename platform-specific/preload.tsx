import React from "react";
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import {IDefaultContainerProps} from "../src/types/props";
import {CUSTOM_FONTS} from "../src/constants/fonts";

function Preload(props: IDefaultContainerProps) {     
    console.log(`loading fonts...`)
    const [fontsLoaded] = useFonts(CUSTOM_FONTS);  
    let jsx: JSX.Element = null;
    console.log(`fontsLoaded=${fontsLoaded}`)
    if(fontsLoaded) {
        jsx = props.children;
    } else {
        jsx = <AppLoading />
    }

    return jsx;
};

export {Preload};




