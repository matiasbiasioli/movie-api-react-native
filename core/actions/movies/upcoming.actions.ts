import { View, Text } from "react-native";
import React from "react";
import movieApi from "@/core/api/movieApi";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

const upcomingAction = async () => {
  try {
    const { data } = await movieApi.get("/upcoming");
    const watchMovies = data.results.map(MovieMapper.fromTheMovideDBToMovie)
    return watchMovies
  } catch (error) {
    console.log("cannot load upcoming movies, sorry", error);
  }
};

export default upcomingAction;
