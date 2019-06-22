import React from "react";
import { Sticky } from "react-sticky";

const NavBar = () => (
<div> test
  </div>
)

const StickyBar = () => (
  <Sticky>
    {({
      style,
      // the following are also available but unused in this example
      isSticky,
      wasSticky,
      distanceFromTop,
      distanceFromBottom,
      calculatedHeight
    }) => (
      <div style={style}>
      {NavBar()}
      </div>
      )
    }
  </Sticky>
);

export default StickyBar;
