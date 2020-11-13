import React from "react";
import {TouchableOpacity,  Text, ViewStyle, TextStyle} from "react-native";
import { IFont } from "../src/types/font";

const RADIUS = 30;

interface ISButtonProps {
    title: string;
    backgroundColor: string;
    color: string;
    width?: number;
    font?: IFont,
    align?: "center"|"flex-start"|"flex-end",
    buttonStyle: "rounded" | "leftrounded";
    onPress: () => void;
}

const SButton = (props: ISButtonProps) =>  {
    const style: ViewStyle = {
        backgroundColor: props.backgroundColor, 
        width: undefined,
        alignItems: "center",
        justifyContent: "center",
        padding: 6
    };
    if(props.align) {
        style.alignItems=props.align;
    }
    if(props.buttonStyle==="leftrounded" || props.buttonStyle==="rounded") {
        style.borderTopLeftRadius = RADIUS;
        style.borderBottomLeftRadius = RADIUS;
    }
    if(props.buttonStyle==="rounded") {
        style.borderTopRightRadius = RADIUS;
        style.borderBottomRightRadius = RADIUS;
    }
    if(props.width) {
        style.width=props.width;
    }
    let textStyle: TextStyle = {
        color: props.color,
    };
    if(props.font) {
        textStyle = {...textStyle, ...props.font};
    }
    return (
        <TouchableOpacity
            onPress = {() => props.onPress()}
            style={style}
        >
            <Text style={textStyle}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export {SButton};
