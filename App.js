import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import MainView from "./src/ui/components/MainView";

const App = () => {
    return (
        <View>
            <StatusBar />
            <MainView />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({});
