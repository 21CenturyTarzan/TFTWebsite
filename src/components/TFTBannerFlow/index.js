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

import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import TFTBanner from "./Banner"
import TFTIndicators from "./Indicators";
import {
  StyledButtonWrapper,
  StyledIconButton,
  StyledItemWrapper,
  StyledRoot
} from "./Styled";

const useInterval = (callback, delay) => {
  const savedCallback = useRef(() => { });

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => { };
  }, [delay]);
}

export default function TFTBannerFlow(props) {
  const [state, setState] = useState({
    active: 0,
    prevActive: 0,
    next: true,
  });
  // const [height, setHeight] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // compoundDidMount
  useEffect(() => {
    const { index, changeOnFirstRender } = props;
    setNext(index, true, changeOnFirstRender);
  }, []);

  useInterval(() => {
    const { autoPlay } = props;
    if (autoPlay === true && !paused) next(undefined);
  }, props.interval);

  useEffect(() => {
    const { autoPlay, interval } = props;
    if (autoPlay && !paused) {
      const timer = setInterval(() => {
        setProgress(oldProgress => {
          if (oldProgress >= 100) {
            return 0;
          }
          const newProg = oldProgress + 10;
          return newProg;
        });
      }, interval / 10);

      return () => {
        clearInterval(timer);
      };
    }
    
    return () => {};
  }, [state.active]);

  useEffect(() => {
    setNext(props.index, true);
  }, []);

  const next = (event) => {
    const { children, cycleNavigation } = props;
    let last = Array.isArray(children) ? children.length - 1 : 0;
    const nextActive = state.active + 1 > last ?
      (cycleNavigation ? 0 : state.active) :
      state.active + 1;
    setNext(nextActive, true);
    if (event) event.stopPropagation();
  };

  const prev = (event) => {
    const { children, cycleNavigation } = props;
    let last = Array.isArray(children) ? children.length - 1 : 0;
    const nextActive = state.active - 1 < 0 ?
      (cycleNavigation ? last : state.active) :
      state.active - 1;

    setNext(nextActive, false);
    if (event) event.stopPropagation();
  };

  const setNext = (index, isNext, runCallbacks = true) => {
    const { onChange, children, strictIndexing } = props;

    setProgress(0);
    if (Array.isArray(children)) {
      if (strictIndexing && index > children.length - 1) index = children.length - 1;
      if (strictIndexing && index < 0) index = 0;
    } else {
      index = 0;
    }

    if (runCallbacks) {
      if (isNext !== undefined)
        isNext ? props.next(index, state.active) : props.prev(index, state.active);

      onChange(index, state.active);
    }

    if (isNext === undefined)
      isNext = index > state.active;

    setState({
      active: index,
      prevActive: state.active,
      next: isNext,
    });
  };

  const {
    children,
    sx,
    className,

    stopAutoPlayOnHover,
    animation,
    duration,
    swipe,

    navButtonsAlwaysInvisible,
    navButtonsAlwaysVisible,
    cycleNavigation,
    fullHeightHover,
    navButtonsProps,
    navButtonsWrapperProps,
    NavButton,

    NextIcon,
    PrevIcon,

    indicators,
    indicatorContainerProps,
    indicatorIconButtonProps,
    activeIndicatorIconButtonProps,
    IndicatorIcon,
  } = props;

  const showButton = (next = true) => {
    if (cycleNavigation) return true;

    const last = Array.isArray(children) ? children.length - 1 : 0;

    if (next && state.active === last) return false;
    if (!next && state.active === 0) return false;

    return true;
  }

  return (
    <StyledRoot
      sx={sx}
      className={className}
      onMouseOver={() => { stopAutoPlayOnHover && setPaused(true) }}
      onMouseOut={() => { stopAutoPlayOnHover && setPaused(false) }}
      onFocus={() => { stopAutoPlayOnHover && setPaused(true) }}
      onBlur={() => { stopAutoPlayOnHover && setPaused(false) }}
    >
      <StyledItemWrapper
      // style={{ height: height }}
      >
        {
          Array.isArray(children) ?
            children.map((child, index) => {
              return (
                <TFTBanner
                  key={`carousel-item${index}`}
                  state={state}
                  index={index}
                  maxIndex={children.length - 1}
                  child={child}
                  animation={animation}
                  duration={duration}
                  swipe={swipe}
                  next={next}
                  prev={prev}
                // setHeight={setHeight}
                />
              )
            }) :
            <TFTBanner
              key={`carousel-item0`}
              state={state}
              index={0}
              maxIndex={0}
              child={children}
              animation={animation}
              duration={duration}
            // setHeight={setHeight}
            />
        }
      </StyledItemWrapper>

      {!navButtonsAlwaysInvisible && showButton(true) &&
        <StyledButtonWrapper
          $next $prev={false}
          $fullHeightHover={fullHeightHover}
          {...navButtonsWrapperProps}
        >
          {NavButton !== undefined ?
            NavButton({ onClick: next, next: true, prev: false, ...navButtonsProps }) :
            <StyledIconButton
              $alwaysVisible={navButtonsAlwaysVisible}
              $fullHeightHover={fullHeightHover}
              onClick={next}
              aria-label="Next"
              {...navButtonsProps}
            >
              {NextIcon}
            </StyledIconButton>
          }
        </StyledButtonWrapper>
      }

      {!navButtonsAlwaysInvisible && showButton(false) &&
        <StyledButtonWrapper
          $next={false} $prev
          $fullHeightHover={fullHeightHover}
          {...navButtonsWrapperProps}
        >
          {NavButton !== undefined ?
            NavButton({ onClick: prev, next: false, prev: true, ...navButtonsProps }) :
            <StyledIconButton
              $alwaysVisible={navButtonsAlwaysVisible}
              $fullHeightHover={fullHeightHover}
              onClick={prev}
              aria-label="Previous"
              {...navButtonsProps}
            >
              {PrevIcon}
            </StyledIconButton>
          }
        </StyledButtonWrapper>
      }

      {
        indicators === true ?
          <TFTIndicators
            length={Array.isArray(children) ? children.length : 0}
            active={state.active}
            // press={setNext}
            indicatorContainerProps={indicatorContainerProps}
            indicatorIconButtonProps={indicatorIconButtonProps}
            activeIndicatorIconButtonProps={activeIndicatorIconButtonProps}
            IndicatorIcon={IndicatorIcon}
            progress={progress}
          /> : null
      }
    </StyledRoot>
  )
}

TFTBannerFlow.defaultProps = {
  sx: {},
  className: "TFTBannerFlow",
  children: [],
  index: 0,
  strictIndexing: true,
  autoPlay: false,
  stopAutoPlayOnHover: false,
  interval: 4000,
  animation: "fade",
  duration: 500,
  swipe: true,
  navButtonsAlwaysInvisible: false,
  navButtonsAlwaysVisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  navButtonsWrapperProps: { style: {}, className: "", },
  navButtonsProps: { style: {}, className: "", },
  NextIcon: <NavigateNext />,
  PrevIcon: <NavigateBefore />,
  indicators: true,
  indicatorContainerProps: { style: {}, className: "", },
  indicatorIconButtonProps: { style: {}, className: "", },
  activeIndicatorIconButtonProps: { style: {}, className: "", },
  // IndicatorIcon: props.IndicatorIcon,
  onChange: () => { },
  changeOnFirstRender: false,
  next: () => { },
  prev: () => { },
};

TFTBannerFlow.propTypes = {
  children: PropTypes.any,
  sx: PropTypes.any,
  className: PropTypes.string,
  index: PropTypes.number,
  strictIndexing: PropTypes.bool,
  autoPlay: PropTypes.bool,
  stopAutoPlayOnHover: PropTypes.bool,
  interval: PropTypes.number,
  animation: PropTypes.oneOf([
    "fade",
    "slide",
  ]),
  duration: PropTypes.number,
  swipe: PropTypes.bool,
  indicators: PropTypes.bool,
  navButtonsAlwaysVisible: PropTypes.bool,
  navButtonsAlwaysInvisible: PropTypes.bool,
  cycleNavigation: PropTypes.bool,
  fullHeightHover: PropTypes.bool,
  navButtonsWrapperProps: PropTypes.any,
  navButtonsProps: PropTypes.any,
  NextIcon: PropTypes.any,
  PrevIcon: PropTypes.any,
  NavButton: PropTypes.func,
  indicatorContainerProps: PropTypes.any,
  indicatorIconButtonProps: PropTypes.any,
  activeIndicatorIconButtonProps: PropTypes.any,
  onChange: PropTypes.func,
  changeOnFirstRender: PropTypes.bool,
  next: PropTypes.func,
  prev: PropTypes.func,
  IndicatorIcon: PropTypes.any,
};
