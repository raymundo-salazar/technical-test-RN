import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const MovieEntry = () => {

    return(
        <TextInput
        style={styles.input}
        placeholder="Search a movie!"
        keyboardType="default"
      />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})