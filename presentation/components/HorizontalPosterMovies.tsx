import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Movies } from "@/infrastructure/interfaces/movies-interface";
import MainPosterMovies from "./MainPosterMovies";

interface Props {
  movies: Movies[];
  title?: string;
}

const HorizontalPosterMovies = ({ movies, title }: Props) => {
  return (
    <View>
      <Text className="text-2xl font-bold ml-4 mt-4 mb-4">{title}</Text>
      <FlatList
      className="ml-4"
        horizontal
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MainPosterMovies id={item.id} poster={item.poster} smallPoster />
        )}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalPosterMovies;
