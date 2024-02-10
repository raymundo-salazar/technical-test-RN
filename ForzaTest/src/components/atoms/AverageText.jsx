import React from "react";
import { Text, StyleSheet } from "react-native";

export const AverageText = ({average}) => {

    return(
        <Text style={styles.text}>{average}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontStyle: "normal",
        textDecorationLine: "underline",
        textAlign: "right"
    }
})