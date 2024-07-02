import React, { useState } from "react";
import { TouchableOpacity, ImageBackground, StyleSheet } from "react-native";

export const StarButton = ({ onPress }) => {
  const [isStarred, setIsStarred] = useState(false);

  const handlePress = () => {
    setIsStarred(!isStarred);
    if (onPress) {
      onPress(!isStarred);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.starButton}>
      <ImageBackground
        source={require("../../assets/star.png")}
        style={[styles.star, isStarred && styles.starred]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  starButton: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  star: {
    width: 50,
    height: 50,
  },
  starred: {},
});
