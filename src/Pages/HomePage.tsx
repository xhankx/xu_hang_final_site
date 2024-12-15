import React from "react";
import headshot from "../Assets/Images/SupriyaThukral.jpg";
import CardComponent from "../Components/CardRow";
import { ImageProps } from "../Components/Page";
import PageWithChildren from "../Components/PageWithChildren";
import useWindowSize from "../helpers";

const HomePage: React.FC = () => {
  // Props for the headshot image
  const headshotProps: ImageProps = {
    src: headshot,
    alt: "Headshot",
    className: "round-image",
  };

  // Get the window size using a custom hook
  const windowSize = useWindowSize() || { width: 0, height: 0 };

  return (
    <PageWithChildren id="home">
      {/* CardComponent represents the main section of the homepage */}
      <CardComponent
        title="Lorem Ipsum"
        image={headshotProps}
        imageLocation={windowSize.width <= 768 ? "left" : "right"}
      >
        {/* Content inside the CardComponent */}
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tempus libero nec magna vulputate, eu tincidunt sem pellentesque.
            Pellentesque suscipit vestibulum mi, a vestibulum dui. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Proin vel erat vitae quam ultrices rhoncus. Sed vel
            magna et elit ultricies consectetur. Nulla lacinia justo ac arcu
            facilisis, a efficitur lorem consectetur. Sed malesuada vestibulum
            tellus in suscipit. Fusce aliquam ligula vel lacinia pharetra. Nunc
            auctor tortor ac velit euismod congue. Duis in sapien eu mi ultrices
            venenatis a ut enim. Ut in lorem non sapien viverra tristique ac sit
            amet metus. Mauris vulputate rhoncus velit at congue.
          </p>
          <p>
            Nulla facilisi. Proin vehicula egestas fermentum. Nullam interdum
            ipsum nec orci malesuada, ut congue elit faucibus. Proin quis neque
            sit amet lectus dapibus fringilla. Pellentesque feugiat nisi vitae
            felis elementum, et mattis libero consectetur. Quisque pharetra diam
            arcu, non suscipit felis cursus nec. Nam aliquam dapibus dictum.
            Nullam quis ante eget odio mattis placerat non a nibh. Nulla
            facilisi. Suspendisse vehicula quis libero non bibendum. Aenean
            iaculis consectetur tincidunt. Nulla tincidunt risus ac lorem
            finibus, a facilisis velit tempor. Nam vitae consequat arcu. Aliquam
            id velit in ipsum elementum consectetur. Nulla facilisi.
          </p>
        </div>
      </CardComponent>
    </PageWithChildren>
  );
};

export default HomePage;
