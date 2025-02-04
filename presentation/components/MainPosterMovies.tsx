import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import movieDetails from "@/app/movies/[id]";
import { router } from "expo-router";


interface Props {
  id: number;
  poster: string;
  smallPoster: boolean;
}

const MainPosterMovies = ({ poster, id, smallPoster = false }: Props) => {
  return (
    <Pressable onPress={()=> router.push(`/movies/${id}`)}>
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
