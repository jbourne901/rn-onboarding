import {getScreenWidth} from "../../platform-specific/dimensions";

const MAX_WIDTH = getScreenWidth();

const GLOBAL_STYLES = {
    MAIN_BG_COLOR: "white",
    ITEM_TEXT_COLOR: "gray",
    BUTTON_BG_COLOR: "blue",
    BUTTON_TEXT_COLOR: "white",
    BUTTON_FONT: {
        fontFamily: "Roboto-Black", fontSize: 30, lineHeight: 36,
    },
    SCREEN_WIDTH: MAX_WIDTH,
    ITEM_TITLE_FONT: {
        fontFamily: "Roboto-Black", fontSize: 30, lineHeight: 36,
    },
    ITEM_DESC_FONT: {
        fontFamily: "Roboto-Regular", fontSize: 16, lineHeight: 22 
    }
};

export {GLOBAL_STYLES};
