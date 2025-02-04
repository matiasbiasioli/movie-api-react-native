import { View, Text, Image } from "react-native";
import React from "react";
import { ActorsDetails } from "@/infrastructure/interfaces/movies-interface";

interface Props {
  actor: ActorsDetails;
}

const ActorsCard = ({ actor }: Props) => {
  return (
    <View className="mt-2 ml-2 w-[60px]">
      <Image
        className="rounded-2xl"
        style={{ width: 110, height: 150 }}
        source={{ uri: actor.poster }}
      />
      <View className="w-[100px]">
        <Text adjustsFontSizeToFit className="font-semibold text-xl">{actor.name}</Text>
        <Text className="font-semibold text-sm">Character: {actor.character}</Text>
      </View>
    </View>
  );
};

export default ActorsCard;
