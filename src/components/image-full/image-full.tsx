import React from "react";
import {Image, ImageRequireSource, StyleSheet} from "react-native";

interface IImageFullProps {
    source: ImageRequireSource;
}

const ImageFull = (props: IImageFullProps) => {
    return (
        <Image 
            source={props.source}
            style={imageFullStyle.image}
            resizeMode="cover"
        />
    );    
};

const imageFullStyle = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
    }
});

export {ImageFull};
