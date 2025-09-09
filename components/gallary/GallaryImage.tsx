import React from "react";
import GallaryCommonImageContainer from "../common/GallaryCommonImageContainer";

const GallaryImage = () => {
  return (
    <div className="bg-card py-10 ">
      <div className="container">
        <h1 className="text-xl md:text-3xl text-center font-bold text-white">
          Glimpses
        </h1>
        <div className="md:flex mt-4 gap-2">
          {/* Map through your images here */}
          <div>
            <GallaryCommonImageContainer
              title="TU Ground"
              description="Premier Cricket League"
              src="/gallary/ground.jpg"
              width={270}
              height={370}
            />
            <GallaryCommonImageContainer
              title="TU Ground"
              description="Premier Cricket League"
              src="/gallary/gallary3.png"
              width={265}
              height={370}
            />
          </div>
          <div>
            <GallaryCommonImageContainer
              title="TU Ground"
              description="Premier Cricket League"
              src="/gallary/gallary1.png"
              width={600}
              height={340}
            />
            <div className="flex gap-2">
              <GallaryCommonImageContainer
                title="TU Ground"
                description="Premier Cricket League"
                src="/gallary/gallary4.png"
                width={300}
                height={450}
              />
              <GallaryCommonImageContainer
                title="TU Ground"
                description="Premier Cricket League"
                src="/gallary/gallary5.png"
                width={300}
                height={450}
              />
            </div>
          </div>
          <div>
            <GallaryCommonImageContainer
              title="TU Ground"
              description="Premier Cricket League"
              src="/gallary/gallary2.png"
              width={260}
              height={370}
            />
            <GallaryCommonImageContainer
              title="TU Ground"
              description="Premier Cricket League"
              src="/gallary/gallary6.png"
              width={285}
              height={380}
            />
          </div>
        </div>
        <div className="md:flex mt-3 gap-2">
          <GallaryCommonImageContainer
            title="TU Ground"
            description="Premier Cricket League"
            src="/gallary/gallary7.png"
            width={435}
            height={400}
          />
          <GallaryCommonImageContainer
            title="TU Ground"
            description="Premier Cricket League"
            src="/gallary/gallary8.png"
            width={770}
            height={400}
            imageClassName="h-[300px] overflow-hidden"
          />
        </div>
        <div className="md:flex mt-3 gap-2">
          <GallaryCommonImageContainer
            title="TU Ground"
            description="Premier Cricket League"
            src="/gallary/gallary9.png"
            width={300}
            height={400}
          />
          <GallaryCommonImageContainer
            title="TU Ground"
            description="Premier Cricket League"
            src="/gallary/gallary12.png"
            width={590}
            height={400}
            imageClassName="h-[300px] overflow-hidden"
          />
          <GallaryCommonImageContainer
            title="TU Ground"
            description="Premier Cricket League"
            src="/gallary/gallary13.png"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default GallaryImage;
