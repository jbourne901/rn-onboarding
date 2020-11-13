import React from "react";
import {View, ViewStyle} from "react-native";

interface ISRowProps {
    width?: number|string;
    height?: number|string;
    backgroundColor?: string;
    alignItems?: "center";
    justifyContent?: "center";
    marginTop?: number;
    children: JSX.Element | JSX.Element[] | undefined;    
};

const SRow = (props: ISRowProps) => {
    const style: ViewStyle = {flexDirection: "row", width: undefined, height: undefined,
                 backgroundColor: undefined, alignItems: "center", 
                 justifyContent: "center", marginTop: undefined};
    if(props.width) {
        style.width = props.width;
    }
    if(props.height) {
        style.height = props.height;
    }
    if(props.backgroundColor) {
        style.backgroundColor = props.backgroundColor;
    }
    if(props.alignItems) {
        style.alignItems=props.alignItems;
    }
    if(props.justifyContent) {
        style.justifyContent=props.justifyContent;
    }
    if(props.marginTop) {
        style.marginTop = props.marginTop;
    }
    
    return (
        <View
            style={style}
        >
            {props.children}
        </View>
    );
};
 
export {SRow};
