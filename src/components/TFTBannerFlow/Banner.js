/**
 **************************************************************
 * The Fans Together WebKit - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI (https://t.me/Telecrypto20)
 * 
 **************************************************************
 */

import { AnimatePresence, motion } from "framer-motion";

import React from "react";
import PropTypes from "prop-types";
import { StyledItem } from "./Styled";

export default function TFTBanner(props) {
    let { animation, next, prev, swipe, state, index, maxIndex, duration, child } = props;
    const slide = animation === "slide";
    const fade = animation === "fade";

    const dragProps = {
        drag: "x",
        layout: true,
        onDragEnd: (event, info) => {
            if (!swipe)
                return;
            if (info.offset.x > 0) prev && prev();
            else if (info.offset.x < 0) next && next();

            event.stopPropagation();
        },
        dragElastic: 0,
        dragConstraints: { left: 0, right: 0 },
    };

    // const divRef = React.useRef(null);
    // React.useEffect(() => {
    //     if (divRef.current)
    //     {
    //       setHeight(divRef.current.clientHeight);
    //     }
    // }, [divRef])

    const variants = {
        leftwardExit: {
            x: slide ? "-100%" : undefined,
            opacity: fade ? 0 : undefined,
            zIndex: 0,
            // position: "relative",
        },
        leftOut: {
            x: slide ? "-100%" : undefined,
            opacity: fade ? 0 : undefined,
            zIndex: 0,
            // position: "relative",
        },
        rightwardExit: {
            x: slide ? "100%" : undefined,
            opacity: fade ? 0 : undefined,
            zIndex: 0,
            // position: "relative",
        },
        rightOut: {
            x: slide ? "100%" : undefined,
            opacity: fade ? 0 : undefined,
            zIndex: 0,
        },
        center: {
            x: 0,
            opacity: 1,
            zIndex: 1,
            // display: "block",
            // position: "relative",
        },
    };

    const { active, next: isNext, prevActive } = state;
    let animate = "center";
    if (index === active)
        animate = "center";
    else if (index === prevActive) {
        animate = isNext ? "leftwardExit" : "rightwardExit";
        if (active === maxIndex && index === 0) animate = "rightwardExit";
        if (active == 0 && index === maxIndex) animate = "leftwardExit";
    } else {
        animate = index < active ? "leftOut" : "rightOut";
        if (active === maxIndex && index === 0) animate = "rightOut";
        if (active === 0 && index === maxIndex) animate = "leftOut";
    }

    duration = duration / 1000;
    return (
        // <StyledItem ref={divRef}>
        <StyledItem>
            <AnimatePresence initial={false} custom={isNext}>
                <motion.div style={{ height: "100%" }} {...(swipe && dragProps)}>
                    <motion.div
                        custom={isNext}
                        variants={variants}
                        animate={animate}
                        transition={{
                            x: { type: "tween", duration: duration, delay: 0 },
                            opacity: { duration: duration },
                        }}
                        style={{ position: "relative", height: "100%" }}
                    >
                        {child}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </StyledItem>
    )
}

TFTBanner.propTypes = {
    animation: PropTypes.oneOf([
        "fade",
        "slide",
    ]),
    next: PropTypes.func,
    prev: PropTypes.func,
    state: PropTypes.shape({
        active: PropTypes.number,
        prevActive: PropTypes.number,
        next: PropTypes.bool,
    }),
    swipe: PropTypes.bool,
    index: PropTypes.number,
    maxIndex: PropTypes.number,
    duration: PropTypes.number,
    child: PropTypes.any,
    setHeight: PropTypes.func,
};
