import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { ParallaxBanner } from "react-scroll-parallax";

import Night from "../../assets/night.jpg";
import Mountain from "../../assets/mountain.png";

import backgroundImg from "../../assets/banner-background.jpg";
import forgroundImg from "../../assets/banner-foreground.png";

const ParallexComponent = () => {
  const background: BannerLayer = {
    image: Night,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl text-white font-thin">
          Hello World!
        </h1>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image: Mountain,
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900"
      style={{ height: "500px" }}
    />

    // <ParallaxBanner
    //   layers={[
    //     {
    //       image: Night,
    //       speed: -20,
    //     },
    //     { image: Mountain, speed: -10 },
    //     {
    //       children: (
    //         <div
    //           style={{ textAlign: "center", color: "red", fontSize: "2rem" }}
    //         >
    //           <h3>Welcome to the Parallax World</h3>
    //         </div>
    //       ),
    //       speed: -10,
    //     },
    //   ]}
    //   style={{ height: "500px" }}
    // />
  );
};
export default ParallexComponent;
