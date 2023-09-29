import React from "react";
import styled from "styled-components";
import MoviesSlider from "./MoviesSlider";

const SliderContainer = ({ movies }) => {
  const getMoviesBetween = (start, end) => {
    return movies.slice(start, end);
  };

  return (
    <SliderWrapper>
      <MoviesSlider data={getMoviesBetween(0, 10)} title="Only On NetFlix" />
      <MoviesSlider data={getMoviesBetween(10, 20)} title="Trending now" />
      <MoviesSlider
        data={getMoviesBetween(20, 30)}
        title="Popular On NetFlix"
      />
      <MoviesSlider data={getMoviesBetween(30, 40)} title="Romantic Movies" />
      <MoviesSlider data={getMoviesBetween(40, 50)} title="Epic" />
      <MoviesSlider data={getMoviesBetween(50, 60)} title="New Release" />
      <MoviesSlider data={getMoviesBetween(60, 70)} title="Action Movies" />
      <MoviesSlider data={getMoviesBetween(70, 80)} title="Only On NetFlix" />
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div``;

export default SliderContainer;
