import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { useEffect, useState } from "react";
import { useMoviesPopular } from "./app/hooks/useMoviePular";

export default function App() {
  const { moviesState } = useMoviesPopular();

  // const viewInfo = () => {
  //   console.log(info);
  // };

  useEffect(() => {
    // viewInfo();
    console.log(moviesState);
  }, [moviesState]);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(moviesState)}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
