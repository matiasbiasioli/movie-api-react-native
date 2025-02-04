import { View, Text, Dimensions, useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { nowPlayingActions } from "@/core/actions/movies/now-playing.actions";
import { Movies } from "@/infrastructure/interfaces/movies-interface";
import MainPosterMovies from "./MainPosterMovies";

interface Props {
  movies: Movies[];
}

const MainSlideShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;
    // const width = Dimensions.get("window").width;
  return (
    <View className="ml-4">
      <Carousel
        ref={ref}
        // loop
        autoPlay
        data={movies}
        renderItem={({ item }) => (
          <MainPosterMovies
            id={item.id}
            poster={item.poster}
            smallPoster={false}
          />
        )}
        width={160}
        height={220}
        style={{
          width: width,
        }}
        // mode="parallax"
        // modeConfig={{
        //   parallaxScrollingScale: 0.9,
        //   parallaxScrollingOffset: 50
        // }}
        defaultIndex={0}
      />
    </View>
  );
};

export default MainSlideShow;
