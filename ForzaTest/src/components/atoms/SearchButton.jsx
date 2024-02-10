import React from "react";
import { Button, StyleSheet } from "react-native";

export const SearchButton = () => {

    return(
        <Button style={styles.button}>Search</Button>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        color: "EF4848",
        fontSize: 10
    }
})