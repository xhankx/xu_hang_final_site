import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import deltahacksLogo from "../Assets/Images/Deltahacks.png";
import formaLogo from "../Assets/Images/FormaLogo.png";
import CardComponent from "../Components/CardRow";
import { ImageProps } from "../Components/Page";
import PageWithChildren from "../Components/PageWithChildren";

const ExperiencePage: React.FC = () => {
  const formaLogoProps: ImageProps = {
    src: formaLogo,
    alt: "Forma.AI Logo",
    className: "rectangle-image",
  };

  const deltahacksLogoProps: ImageProps = {
    src: deltahacksLogo,
    alt: "DeltaHacks Logo",
    className: "round-image",
  };
  return (
    <PageWithChildren className="experience" id="experience">
      <h1>Projects and Experience</h1>
      <CardComponent image={formaLogoProps}>
        <h2>Working at Company</h2>
        <h3>
          <a href="https://company.com" target="_blank" rel="noreferrer">
            <strong>Forma.AI</strong>
          </a>{" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus
          libero nec magna vulputate, eu tincidunt sem pellentesque.
          Pellentesque suscipit vestibulum mi, a vestibulum dui. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Proin vel erat vitae quam ultrices rhoncus. Sed vel magna et
          elit ultricies consectetur. Nulla lacinia justo ac arcu facilisis, a
          efficitur lorem consectetur. Sed malesuada vestibulum tellus in
          suscipit. Fusce aliquam ligula vel lacinia pharetra. Nunc auctor
          tortor ac velit euismod congue. Duis in sapien eu mi ultrices
          venenatis a ut enim. Ut in lorem non sapien viverra tristique ac sit
          amet metus. Mauris vulputate rhoncus velit at congue.
        </h3>
        <div>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus
          libero nec magna vulputate, eu tincidunt sem pellentesque.
          Pellentesque suscipit vestibulum mi, a vestibulum dui. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Proin vel erat vitae quam ultrices rhoncus. Sed vel magna et
          elit ultricies consectetur. Nulla lacinia justo ac arcu facilisis, a
          efficitur lorem consectetur. Sed malesuada vestibulum tellus in
          suscipit. Fusce aliquam ligula vel lacinia pharetra. Nunc auctor
          tortor ac velit euismod congue. Duis in sapien eu mi ultrices
          venenatis a ut enim. Ut in lorem non sapien viverra tristique ac sit
          amet metus. Mauris vulputate rhoncus velit at congue.
        </div>
      </CardComponent>
      <CardComponent image={deltahacksLogoProps}>
        <h2>DeltaHacks - Director of Sponsorship</h2>
        <h3>
          <a href="https://company.com" target="_blank" rel="noreferrer">
            <strong>Company</strong>
          </a>{" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus
          libero nec magna vulputate, eu tincidunt sem pellentesque.
          Pellentesque suscipit vestibulum mi, a vestibulum dui. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Proin vel erat vitae quam ultrices rhoncus. Sed vel magna et
          elit ultricies consectetur. Nulla lacinia justo ac arcu facilisis, a
          efficitur lorem consectetur. Sed malesuada vestibulum tellus in
          suscipit. Fusce aliquam ligula vel lacinia pharetra. Nunc auctor
          tortor ac velit euismod congue. Duis in sapien eu mi ultrices
          venenatis a ut enim. Ut in lorem non sapien viverra tristique ac sit
          amet metus. Mauris vulputate rhoncus velit at congue.
        </h3>
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
        </div>
      </CardComponent>
    </PageWithChildren>
  );
};

export default ExperiencePage;
