import React from "react";
import {SSafeAreaViewFlexCenter} from "../../../platform-specific/safe-area-view-flex-center";

interface IFullCenterProps {
    backgroundColor?: string;
    children: JSX.Element | JSX.Element[] | undefined;
}

const FullCenter = (props: IFullCenterProps) => {
    return (
        <SSafeAreaViewFlexCenter backgroundColor={props.backgroundColor}>
            {props.children}
        </SSafeAreaViewFlexCenter>
    );    
};
 
export {FullCenter};
