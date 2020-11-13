const onboarding1: number = require("../assets/images/onboarding-1.png");
const onboarding2: number = require("../assets/images/onboarding-2.png");
const onboarding3: number = require("../assets/images/onboarding-3.png");

export interface IOnBoarding {
    title: string;
    description: string;
    img: number;
};

export const testOnBoardings: IOnBoarding[] = [
    {
        title: "Let's Travelling",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding1
    },
    {
        title: "Navigation",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding2
    },
    {
        title: "Destination",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding3
    }

]
