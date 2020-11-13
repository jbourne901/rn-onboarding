import React from "react";
import {Image, ImageRequireSource, ImageStyle} from "react-native";

type ISImageSource = ImageRequireSource;

interface ISImageProps {
    source: ISImageSource;
    width?: number|string;
    height?: number|string;
};

const SImage = (props: ISImageProps) => {
    const style: ImageStyle = {width: "100%", height: "100%"};
    if(props.width) {
        style.width=props.width;
    }
    if(props.height) {
        style.height=props.height;
    }

    return (
        <Image 
            source={props.source}
            style={style}
            resizeMode="cover"
        />
    );
};

export {SImage};
