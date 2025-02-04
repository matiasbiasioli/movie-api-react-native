import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  Animated,
  Pressable,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useMovie from "@/presentation/hooks/useMovie";
import DetailsMovieContent from "@/presentation/components/DetailsMovieContent";
import DetailsMoviePoster from "@/presentation/components/DetailsMoviePoster";
import HorizontalActorMovies from "@/presentation/components/HorizontalActorMovies";

const movieDetails = () => {
  const { id } = useLocalSearchParams();
  // getMovieDetails(+id)
  const { detailsQuery, actorsQuery } = useMovie(+id);

  if (detailsQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text className="text-2xl">Loading Details...</Text>
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }
  return (
    <ScrollView>
      <DetailsMoviePoster />
      <DetailsMovieContent />
      <HorizontalActorMovies cast={actorsQuery.data ?? []} />
    </ScrollView>
  );
};

export default movieDetails;
