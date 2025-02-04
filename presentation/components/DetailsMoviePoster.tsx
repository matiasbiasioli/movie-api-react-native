import {
  View,
  Image,
  useWindowDimensions,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useRef } from "react";
import useMovie from "../hooks/useMovie";
import { router, useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  poster: string;
}

const DetailsMoviePoster = () => {
  const { id } = useLocalSearchParams();
  const { detailsQuery } = useMovie(+id);
  const { height } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        colors={["rgba(0,0,0,0.2)", "transparent"]}
        start={[0, 0]}
        style={{
          position: "absolute",
          height: height,
          width: '100%',
          zIndex: 1,
        }}
      />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={{ position: "absolute", top: 30, left: 10, zIndex: 1 }}>
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back-outline"
            size={35}
            color="white"
            className="shadow"
          ></Ionicons>
        </Pressable>
      </View>

      <View style={{ height: height * 0.7 }}>
        <Image
          className="flex-1 rounded-b-[25px]"
          source={{ uri: detailsQuery.data?.poster }}
          resizeMode="cover"
        />
      </View>
    </>
  );
};

export default DetailsMoviePoster;
