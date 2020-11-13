import React from "react";
import {SView} from "../../../../platform-specific/view";
import {SText} from "../../../../platform-specific/text";
import { IOnBoarding } from "../../../types/onboarding";
import { GLOBAL_STYLES } from "../../../constants/global-styles";
import {SButton} from "../../../../platform-specific/button";
import {SRight} from "../../../../platform-specific/right";

interface ISOnboardingFooterProps {
    item: IOnBoarding;
    completed: boolean;
}

const OnBoardingFooter = (props: ISOnboardingFooterProps) => {
       
    const handleSkip = () => {

    };

    const buttonTitle = (props.completed) ? "Let's Go" : "Skip";

    return (
        <SView height={"100%"}>
            <SText 
                text={props.item.title} 
                font={GLOBAL_STYLES.ITEM_TITLE_FONT}
                color = {GLOBAL_STYLES.ITEM_TEXT_COLOR}
                align = "center"
            />
            <SText 
                text={props.item.description} 
                font={GLOBAL_STYLES.ITEM_DESC_FONT}
                color = {GLOBAL_STYLES.ITEM_TEXT_COLOR}
                align = "center"
            />
            <SRight>
                <SButton 
                    color={GLOBAL_STYLES.BUTTON_TEXT_COLOR}
                    backgroundColor={GLOBAL_STYLES.BUTTON_BG_COLOR}
                    font = {GLOBAL_STYLES.BUTTON_FONT}
                    buttonStyle="leftrounded"
                    title={buttonTitle}
                    width={150}
                    align="flex-start"
                    onPress = { () => handleSkip() } 
                />
            </SRight>
        </SView>
    );
};

export {OnBoardingFooter};