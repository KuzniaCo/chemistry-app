import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import { React } from "react";
import Calendar from "./Calendar";
import { StatusBar } from "expo-status-bar";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ScrollView } from "react-native-gesture-handler";

const MainView = () => {
    // const POPULAR = [
    //     {
    //         id: "1",
    //         title: "first",
    //     },
    //     {
    //         id: "2",
    //         title: "second",
    //     },
    //     {
    //         id: "3",
    //         title: "third",
    //     },
    //     {
    //         id: "4",
    //         title: "fourth",
    //     },
    // ];

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={"transparent"} translucent />
            <View style={styles.hamburgerMenuContainer}>
                <Pressable>
                    <FontAwesome5
                        name="bars"
                        style={styles.textAlign}
                        size={26}
                        color="#405C73"
                    />
                </Pressable>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.sectionBar}>
                    <Text style={styles.sectionBarText}>XYZ</Text>
                </View>
                <View style={styles.popularTextContainer}>
                    <Text style={styles.popularText}>Popularne</Text>
                </View>
                {/* <View style={styles.popularItemsContainer}>
                    <View style={styles.popularItem}></View>
                    <View style={styles.popularItem}></View>
                    <View style={styles.popularItem}></View>
                </View> */}
                {/* <View style={styles.popularItemsContainer}> */}
                <ScrollView
                    contentContainerStyle={styles.popularItemsContainer}
                    horizontal={true}
                >
                    <View style={styles.popularItem}></View>
                    <View style={styles.popularItem}></View>
                    <View style={styles.popularItem}></View>
                    <View style={styles.popularItem}></View>
                    <View style={styles.popularItem}></View>
                </ScrollView>
                {/* </View> */}
                <View style={styles.sectionBar}>
                    <Text style={styles.sectionBarText}>Materiały</Text>
                </View>
                <Calendar />
            </View>
        </SafeAreaView>
    );
};

export default MainView;

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        alignItems: "center",
        padding: 20,
        paddingTop: 10,
    },
    hamburgerMenuContainer: {
        width: "100%",
        paddingLeft: 25,
        marginTop: 20,
        // marginBottom: 5,
    },
    hamburgerMenu: {
        textAlign: "left",
        color: "white",
    },
    sectionBar: {
        justifyContent: "center",
        width: "100%",
        height: 70,
        color: "white",
        backgroundColor: "#729FC4",
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 20,
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 10,
    },
    sectionBarText: {
        fontSize: 34,
        color: "white",
    },
    popularTextContainer: {
        marginVertical: 10,
    },
    popularItemsContainer: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        height: 150,
        width: "170%",
        // marginVertical: 10,
        // backgroundColor: "red",
    },
    popularItem: {
        width: 100,
        height: "80%",
        borderRadius: 20,
        backgroundColor: "#697178",
        // shadowColor: "#171717",
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 20,
        // elevation: 10,
    },
    popularText: {
        color: "#466178",
        fontSize: 34,
    },
});
