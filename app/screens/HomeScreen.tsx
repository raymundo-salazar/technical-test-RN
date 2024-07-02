import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  FlatList,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Carousel from "react-native-snap-carousel";

import { MoviePoster } from "../components/MoviePoster";
import { useMoviesPopular } from "../hooks/useMoviePular";

const { width: windowWidth } = Dimensions.get("window");

export const HomeScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const { popular, isLoading } = useMoviesPopular();
  const [searchQuery, setSearchQuery] = useState("");

  //Busca en el array de las peliculas populares
  const handleSearch = () => {
    for (let i = 0; i < popular.length; i++) {
      if (popular[i].title.toLowerCase() === searchQuery.toLowerCase()) {
        setSearchQuery("");
        navigation.navigate("DetailsScreen", popular[i]);
      }
    }
    // navigation.navigate("DetailsScreen", result);
  };

  useEffect(() => {
    // console.log(popular);
  }, [popular]);

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    // <ScrollView>
    <View style={{ marginTop: top + 50, alignItems: "center" }}>
      <View style={styles.containerSearch}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          onPress={() => handleSearch()}
        />
      </View>
      <FlatList
        data={popular}
        numColumns={1}
        horizontal={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }: any) => <MoviePoster movie={item} />}
      />
      {/* <View style={{ height: 440 }}>
          <Carousel
            data={popular}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View> */}
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerSearch: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
});
