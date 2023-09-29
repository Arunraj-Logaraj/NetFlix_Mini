import React from "react";
import styled from "styled-components";

const BackGroundImage = () => {
  return (
    <BackgroundContainer>
      <img
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg"
        alt="No internet Connection"
      />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;

  img {
    height: 100vh;
    overflow: hidden;
    width: 100vw;
  }
`;

export default BackGroundImage;
