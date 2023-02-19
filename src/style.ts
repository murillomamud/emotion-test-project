import { keyframes } from "@emotion/react";

const ballBeat = keyframes({
    "100%": {
        opacity: 1,
        transform: "scale(1)"
    },
    "50%": {
        opacity: 0.2,
        transform: "scale(0.75)"
    }
});
export const PRIMARY_COLOR = "#ffffff";
export default (color?: string) => ({
    " > div": {
        borderRadius: "100%",
        height: 15,
        margin: 2,
        width: 15,
        backgroundColor: color || PRIMARY_COLOR,
        animationFillMode: "both",
        "&:nth-of-type(2n-1)": {
            animationDelay: "-0.35s !important"
        },

        animation: `${ballBeat} 0.7s 0s infinite linear`,
        display: "inline-block"
    }
});
