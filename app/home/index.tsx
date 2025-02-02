import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import React from "react";
import useMovies from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/MainSlideShow";
import PopularPosterMovies from "@/presentation/components/HorizontalPosterMovies";
import HorizontalPosterMovies from "@/presentation/components/HorizontalPosterMovies";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();
  // useSafeArea sirve para medir los margenes segun dispositivo
  const safeArea = useSafeAreaInsets();
  //Funcion Spinner de carga de datos
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  //Retorno
  return (
    <ScrollView className="mt-2 mb-4" style={{ flex: 1, paddingTop: safeArea.top }}>
      <Text className="justify-center font-bold text-3xl px-2 mb-4">
        Movies App
      </Text>
      {/* Now Plaiyng movies */}
      <View>
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
      </View>
      {/* Popular Movies Horizontal */}
      <View>
        <HorizontalPosterMovies title="Populares" movies={popularQuery.data ?? []} />
      </View>
      <View>
        <HorizontalPosterMovies title="Top Ranking" movies={topRatedQuery.data ?? []} />
      </View>
      <View>
        <HorizontalPosterMovies title="Próximamente" movies={upcomingQuery.data ?? []} />
      </View>
      {/* <Text>{JSON.stringify(nowPlayingQuery.data)}</Text> */}
      {/* <FlatList
      data={nowPlayingQuery.data}
      keyExtractor={item =>item.id?.toString()}
      renderItem={({item}) => 
      <View>
        <Text>{item.title}</Text>
      </View>
    }
      /> */}
    </ScrollView>
  );
};

export default HomeScreen;
