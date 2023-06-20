import React from "react";
import MasmodIntro from "@site/src/pages/home/masmod/masmod-intro";
import MasmodCode from "@site/src/pages/home/masmod/code";
import MasmodScreenshots from "@site/src/pages/home/masmod/screenshots";

const MasmodSection: React.FC = () => {
  return (
    <>
      <MasmodIntro />
      <MasmodCode />
      <MasmodScreenshots />
    </>
  );
};

export default MasmodSection;
