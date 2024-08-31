import React from "react";
import { Pressable, StyleSheet,Text, TextInput, View } from "react-native";

interface ISearchBar{
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = (props: ISearchBar) => {

    const {value, setValue} = props;


    return (<View style={styles.container}>
        <TextInput style={styles.input} 
        placeholder="Search books"
        placeholderTextColor='#000'
        value={value}
        onChangeText={setValue}
        />

        <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Search</Text>
            </Pressable>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        gap:20,
    },
    input: {
        backgroundColor: "#fff",
        padding: 15,
        fontSize: 15,
        color: "#000",
        flex:1,
        borderRadius: 5,
        
    },
    btn: {
        paddingHorizontal: 15,
        backgroundColor: "#4ecdc4",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,

    },
    btnText: {
        fontSize: 15,
        fontWeight: "500",
        textTransform: "uppercase",
        

    },

});
export default SearchBar;
