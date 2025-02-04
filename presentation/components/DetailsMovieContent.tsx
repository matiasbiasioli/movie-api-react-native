import { View, Text } from "react-native";
import React from "react";
import useMovie from "../hooks/useMovie";
import { useLocalSearchParams } from "expo-router";

const DetailsMovieContent = () => {
  const { id } = useLocalSearchParams();
  const { detailsQuery } = useMovie(+id);
  return (
    <View className="mx-2">
      <Text className="font-light mt-4 text-lg">
        {detailsQuery.data?.originalTitle ?? "sin titulo"}
      </Text>
      <Text className="font-bold mt-1 text-2xl">
        {detailsQuery.data?.title ?? "sin titulo"}
      </Text>
      <Text className="my-2 text-xl">
        Sinopsis: {detailsQuery.data?.description ?? "sin sinopsis"}
      </Text>
      <Text className="text-lg">
        Duration: {detailsQuery.data?.duration ?? "sin duración"} minutos
      </Text>
      <Text className="my-2 text-lg">
        Género: {detailsQuery.data?.genres.join(", ") ?? "sin titulo"}
      </Text>
      <Text className="text-lg">
        Compañias:{" "}
        {detailsQuery.data?.originCompanies.join(", ") ?? "sin titulo"}
      </Text>
      <Text className="my-2 text-lg">
        Production:{" "}
        {detailsQuery.data?.productionCountry.join(", ") ?? "sin titulo"}
      </Text>
    </View>
  );
};

export default DetailsMovieContent;
