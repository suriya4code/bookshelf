import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {

    const [query, setQuery] = useState("");


    return (
        <View style={styles.container}>
            <SearchBar value={query} setValue={setQuery}/>
            {/* Rest of your code */}
        </View>
    );
};
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#292f36",
    },
});

export default HomeScreen;