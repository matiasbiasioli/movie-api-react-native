import { View, Text, Image, Pressable } from "react-native";
import React from "react";

interface Props {
  id: number;
  poster: string;
  smallPoster: boolean;
}

const MainPosterMovies = ({ poster, id, smallPoster = false }: Props) => {
  return (
    <Pressable>
      <Image
        source={{ uri: poster }}
        className="rounded-3xl"
        style={{
          width: smallPoster ? 105 : 150,
          height: smallPoster ? 160 : 220,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MainPosterMovies;
