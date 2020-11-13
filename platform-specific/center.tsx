import React from "react";
import {View, StyleSheet} from "react-native";

interface ISCenterProps {
    children: JSX.Element | JSX.Element[] | undefined;    
};

const SCenter = (props: ISCenterProps) => {
    return (
        <View
            style={scenterStyle.main}
        >
            {props.children}
        </View>
    );
};

const scenterStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});



export {SCenter};
