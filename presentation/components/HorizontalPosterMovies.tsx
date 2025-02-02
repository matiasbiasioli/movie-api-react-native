import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { movies } from "@/infrastructure/interfaces/movies-interface";
import MainPosterMovies from "./MainPosterMovies";

interface Props {
  movies: movies[];
  title?: string;
}

const HorizontalPosterMovies = ({ movies, title }: Props) => {
  return (
    <View>
      <Text className="text-3xl font-bold mx-2 mt-4 mb-4">{title}</Text>
      <FlatList
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
