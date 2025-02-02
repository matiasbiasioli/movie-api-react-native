import { View, Text } from "react-native";
import React from "react";
import "../global.css";
import { nowPlayingActions } from "@/core/actions/movies/now-playing.actions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import popularActionsMovies from "@/core/actions/movies/popular.actions";

const queryClient = new QueryClient();

const RootLayout = () => {
  // nowPlayingActions();
  // popularActionsMovies()
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
      screenOptions={{
        headerShown: false
      }} />
      {/* <Text className="text-3xl">Aqui mi root</Text> */}
    </QueryClientProvider>
  );
};

export default RootLayout;
