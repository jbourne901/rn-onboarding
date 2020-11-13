import React, {useState} from "react";
import {FullCenter} from "../full-center";
import {SPageScrollView} from "../../../platform-specific/page-scroll-view";
import {SView} from "../../../platform-specific/view";
import {testOnBoardings} from "../../types/onboarding";
import {OnBoardingItem} from "./onboarding-item";
import {GLOBAL_STYLES} from "../../constants/global-styles";
import {SRow} from "../../../platform-specific/row";
import {Dot} from "../../../platform-specific/dot";
import {SFixedPos} from "../../../platform-specific/fixed-pos";
import { IPoint } from "../../types/point";
import { getScreenWidth } from "../../../platform-specific/dimensions";


const OnBoarding = () => {
    const onBoardings = testOnBoardings;

    const [dotPos, setDotPos] = useState<number>(0);
    const [completed, setCompleted] = useState<boolean>(false);

    const jsxItems: JSX.Element[] = [];
    const jsxDots: JSX.Element[] = [];
    for(let i=0; i<onBoardings.length; i++) {
        const ob = onBoardings[i];
        jsxItems.push(<OnBoardingItem key={i} item={ob} completed={completed} />);
        let dotSize=10;
        let dotOpacity=0.3;
        if(i===dotPos) {
            dotSize=17;
            dotOpacity=1;
        }
        jsxDots.push(<Dot key={i} color="blue" opacity={dotOpacity} size={dotSize}/>);        
    }

    const handleScroll = (p: IPoint) => {
        const dotIndex = Math.floor(p.x / getScreenWidth());
        setDotPos( dotIndex );
        if(dotIndex===onBoardings.length-1) {
            setCompleted(true);
        }
    }

    return (
        <FullCenter 
            backgroundColor={GLOBAL_STYLES.MAIN_BG_COLOR}
        >
            <SView>
                <SPageScrollView onScroll = {(p: IPoint) => handleScroll(p)}>
                    {jsxItems}
                </SPageScrollView>  
                <SFixedPos top={300}>
                    <SRow justifyContent="center">
                        {jsxDots}    
                    </SRow>
                </SFixedPos>
            </SView>
        </FullCenter>
    );
};

export {OnBoarding};
