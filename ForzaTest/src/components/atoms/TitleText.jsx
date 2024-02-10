import React from "react";
import { Text, StyleSheet } from "react-native";

export const TitleText = ({title}) => {

    return(
        <Text style={styles.text}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontStyle: "normal",
        lineHeight: 20,
        color: "006ECF",
        textAlign: "center"
    }
})