import React from "react";
import {View} from "react-native";

interface ISViewProps {
    width?: number|string;
    height?: number|string;
    backgroundColor?: string;
    children: JSX.Element | JSX.Element[] | undefined;    
};

const SView = (props: ISViewProps) => {
    let style = {width: undefined, height: undefined, backgroundColor: undefined};
    if(props.width) {
        style.width = props.width;
    }
    if(props.height) {
        style.height = props.height;
    }
    if(props.backgroundColor) {
        style.backgroundColor = props.backgroundColor;
    }

    return (
        <View
            style={style}
        >
            {props.children}
        </View>
    );
};
 
export {SView};
