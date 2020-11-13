import React from "react";
import {View, ViewStyle} from "react-native";

interface ISBorderLayoutProps {
    header?: JSX.Element;
    left?: JSX.Element;
    right?: JSX.Element;
    footer?: JSX.Element;
    children: JSX.Element | JSX.Element[] | undefined;
    footerHeight?: number;
    centerHeight?: number;
};

const SBorderLayout = (props: ISBorderLayoutProps) => {
    let jsxHdr: JSX.Element = undefined;
    if(props.header) {
        jsxHdr = <View>{props.header}</View>
    };
    const footerStyle: ViewStyle = {height: undefined};
    if(props.footerHeight) {
        footerStyle.height=props.footerHeight;
    }
    let jsxFooter: JSX.Element = undefined;
    if(props.footer) {
        jsxFooter = <View style={footerStyle}>{props.footer}</View>
    };

    let jsxLeft: JSX.Element = undefined;
    if(props.left) {
        jsxLeft = <View>{props.left}</View>
    };
    let jsxRight: JSX.Element = undefined;
    if(props.right) {
        jsxRight = <View>{props.right}</View>
    };

    const centerStyle: ViewStyle = {flex: 1, height: undefined};
    if(props.centerHeight) {
        centerStyle.height=props.centerHeight;        
    }
    const jsxCenter = (
        <View style={centerStyle}>
            {props.children}
        </View>
    );

    const jsxHorizontal: JSX.Element = (
        <View style={{flexDirection: "row", flex: 1}}>
            {jsxLeft}            
            {jsxCenter}
            {jsxRight}
        </View>
    );


    let jsxVertical: JSX.Element = (
        <View style={ {flexDirection: "column", flex: 1} }>
            {jsxHdr}
            {jsxHorizontal}
            {jsxFooter}
        </View>
    );


    return jsxVertical;
};
 
export {SBorderLayout};
