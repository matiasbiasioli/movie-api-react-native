import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ActorsCard from "./ActorsCard";
import { ActorsDetails } from "@/infrastructure/interfaces/movies-interface";


interface Props {
  cast: ActorsDetails[]
}
const HorizontalActorMovies = ({cast}: Props) => {
  return (
    <View>
      <Text className="text-2xl font-semibold ml-2">Actors</Text>
      <FlatList
        horizontal
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ActorsCard actor={item}/>
        )}
        ItemSeparatorComponent={()=> <View className="mx-8"/>}
      />
    </View>
  );
};

export default HorizontalActorMovies;

const styles = StyleSheet.create({});
