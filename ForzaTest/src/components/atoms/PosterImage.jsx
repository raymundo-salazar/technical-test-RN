import React from "react";
import { Image, StyleSheet } from "react-native";

export const PosterImage = ({image}) => {

    return(
        <Image style={styles.poster} source={{uri: image}} />
    )
}

const styles = StyleSheet.create({
    poster: {
        width: "100%",
        height: "100%"
    }
})