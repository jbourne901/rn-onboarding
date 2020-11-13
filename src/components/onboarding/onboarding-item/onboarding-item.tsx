import React from "react";
import {StyleSheet} from "react-native";
import { IOnBoarding } from "../../../types/onboarding";
import { SImage } from "../../../../platform-specific/image";
import { SCenter } from "../../../../platform-specific/center";
import { SView } from "../../../../platform-specific/view";
import { GLOBAL_STYLES } from "../../../constants/global-styles";
import {OnBoardingFooter} from "../onboarding-footer";
import {SBorderLayout} from "../../../../platform-specific/border-layout";
import {getScreenHeightPercent} from "../../../../platform-specific/dimensions";

interface IOnBoardingItemProps {
    item: IOnBoarding;   
    completed: boolean;
}

const OnBoardingItem = (props: IOnBoardingItemProps) => {
    const footer = (<OnBoardingFooter item={props.item} completed={props.completed} />);
    return (
        <SView width={GLOBAL_STYLES.SCREEN_WIDTH}>
            <SBorderLayout 
                footer = {footer}
                footerHeight={getScreenHeightPercent(30)}
                centerHeight={getScreenHeightPercent(70)}
            >
                <SCenter>
                    <SImage 
                        source = {props.item.img} 
                    />                                    
                </SCenter>
            </SBorderLayout>
        </SView>
    );    
};

const onBoardingItemStyle = StyleSheet.create({
});

export {OnBoardingItem};
