import React, { CSSProperties } from "react";

import { Carousel } from "react-responsive-carousel";

// carousel styles
//import "../src/main.scss";
//import "../src/carousel.scss";
//import "../src/examples/presentation/presentation.scss";
//import { withKnobs, boolean, number } from "@storybook/addon-knobs";

const createCarouselItemImage = (index, options = {}) => (
  <div key={index}>
    <img src={`/assets/${index}.jpeg`} />
    <p className="legend">Legend {index}</p>
  </div>
);

//const baseChildren = <div>{[].map(createCarouselItemImage)}</div>;

const tooglesGroupId = "Toggles";
const valuesGroupId = "Values";
const mainGroupId = "Main";

const getConfigurableProps = () => ({
  showArrows: boolean("showArrows", false, tooglesGroupId),
  showStatus: boolean("showStatus", false, tooglesGroupId),
  showIndicators: boolean("showIndicators", false, tooglesGroupId),
  infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
  showThumbs: boolean("showThumbs", false, tooglesGroupId),
  useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
  autoPlay: boolean("autoPlay", true, tooglesGroupId),
  stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
  swipeable: boolean("swipeable", true, tooglesGroupId),
  dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
  emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
  autoFocus: boolean("autoFocus", false, tooglesGroupId),
  thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
  selectedItem: number("selectedItem", 0, {}, valuesGroupId),
  interval: number("interval", 500, {}, valuesGroupId),
  transitionTime: number("transitionTime", 100, {}, valuesGroupId),
  swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
});

export const base = () => (
  <Carousel {...getConfigurableProps()}>{baseChildren.props.children}</Carousel>
);

export default () => (
  <Carousel autoPlay showArrows={true} showStatus={false} showThumbs={false}>
    {baseChildren.props.children}
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
      <p className="legend">Legend 5</p>
    </div>
  </Carousel>
);
