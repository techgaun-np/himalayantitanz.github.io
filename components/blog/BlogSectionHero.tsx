import React from "react";
import HeroSectionCommon from "../common/HeroSectionCommon";

const BlogSectionHero = () => {
  return (
    <div>
      <HeroSectionCommon
        imageSrc="/about/about-hero.jpg"
        title="Our Blog"
        description="Playing with heart, building a legacy."
        className="h-[100px] md:!h-[400px]"
      />
    </div>
  );
};

export default BlogSectionHero;
