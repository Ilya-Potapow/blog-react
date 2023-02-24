import React from "react";

export const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);


    React.useEffect(() => {
        const handleWindowResizeWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleWindowResizeWidth);
        return () => window.removeEventListener("resize", handleWindowResizeWidth);
    }, []);

    return { width };
}

export const useScroll = () => {
    const [height, setHeight] = React.useState(window.pageYOffset);
    React.useEffect(() => {
        const handleScrollPage = () => {
            setHeight(window.pageYOffset);
        }
        window.addEventListener("scroll", handleScrollPage);
        return () => document.removeEventListener("scroll", handleScrollPage);
    }, []);
    return { height };
}