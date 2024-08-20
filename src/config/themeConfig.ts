import { theme, Grid } from "antd";
import { useTheme } from "../contexts/themeContext";

const { useBreakpoint } = Grid;

export const useCustomThemeConfig = () => {
    const screens = useBreakpoint();
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const { theme: currentTheme } = useTheme();

    return {
        token: {
            fontFamily: "Poppins",
            colorPrimary: "#003862",
            colorBorderSecondary: currentTheme === "dark" ? "#303030" : "#e1e1e1",
            colorLink: "#003862"
        },
        components: {
            Card: {
                // colorBorder: "@colorBorderSecondary"
            },
            Typography: {
                fontSizeHeading1: screens.md ? 45 : 30,
                fontSizeHeading2: screens.md ? 34 : 28,
                lineHeightHeading1: 1.5,
                lineHeightHeading2: 1.4,
                fontWeightStrong: 500,
                colorTextHeading: currentTheme === "dark" ? "#ffffff" : "#0e0e0e"
            },
            Menu: {
                itemActiveBg: "transparent",
                itemSelectedBg: "transparent"
            }
        },
        algorithm: currentTheme === "dark" ? darkAlgorithm : defaultAlgorithm
    };
};
