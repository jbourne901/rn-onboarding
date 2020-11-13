import React from "react";
import {Text, TextStyle} from "react-native";
import {IFont} from "../src/types/font";

interface ISTextProps {
    text: string;
    font?: IFont;
    color?: string;
    align?: "center" | "left" | "right" | "auto" | "justify";
};

const SText = (props: ISTextProps) => {
    let style: TextStyle = {textAlign: "center"};
    if(props.font) {
        style={...style, ...props.font};
    }
    if(props.align) {
        style.textAlign = props.align;
    }
    return (
        <Text style={style}>{props.text}</Text>
    );
};

export {SText};
