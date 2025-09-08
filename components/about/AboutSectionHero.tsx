import React from "react";
import HeroSectionCommon from "../common/HeroSectionCommon";

const AboutSectionHero = () => {
  return (
    <div>
      {" "}
      <HeroSectionCommon
        imageSrc="/about/about-hero.jpg"
        title="Our Story"
        description="Playing with heart, building a legacy."
        className="h-[200px] md:!h-[400px]"
      />
    </div>
  );
};

export default AboutSectionHero;
