// Dodatkowe biblioteki użyte w tym komponencie to:
// expo-linear-gradient

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Pressable,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
// Użycie expo-linear-gradient, aby móc stworzyć gradient na tle.
// React-native nie ma wbudowanego gradientu.
import { LinearGradient } from "expo-linear-gradient";

const Login: React.FC = () => {
    const [frgtPasswd, setFrgtPasswd] = useState<boolean>(false);
    const [passwdIcon, setPasswdIcon] = useState<string>("eye-slash");
    const [isHidden, setIsHidden] = useState<boolean>(true);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <LinearGradient
                    colors={["#b2d5f0", "#dde8f1"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.container}
                >
                    <View style={styles.imageContainer}>
                        <Text>logo/nazwa</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5
                                name="user"
                                style={styles.icon}
                                size={26}
                            />
                        </View>
                        <TextInput
                            style={styles.inputUsername}
                            placeholder="Nazwa użytkownika"
                            placeholderTextColor="#4f5961"
                        ></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <AntDesign name="lock" size={30} color="#000" />
                            <Pressable
                                // Na kliknięcie ikonki oka zmienia się na przekreślone/nie przekreślone
                                // oraz pokazuje kropki/całe hasło.
                                onPressIn={() => {
                                    if (isHidden == true) {
                                        setPasswdIcon("eye");
                                        setIsHidden(!isHidden);
                                    } else {
                                        setPasswdIcon("eye-slash");
                                        setIsHidden(!isHidden);
                                    }
                                }}
                                hitSlop={{
                                    top: 10,
                                    bottom: 10,
                                    left: 10,
                                    right: 10,
                                }}
                            >
                                <FontAwesome5
                                    name={passwdIcon}
                                    style={styles.icon}
                                    size={26}
                                />
                            </Pressable>
                        </View>
                        <TextInput
                            secureTextEntry={isHidden}
                            style={styles.inputPasswd}
                            placeholder="Hasło"
                            placeholderTextColor="#4f5961"
                        ></TextInput>
                    </View>
                    <TouchableOpacity style={styles.logInBtn}>
                        <Text style={styles.logInText}>Zaloguj się</Text>
                    </TouchableOpacity>
                    <Pressable
                        onPressIn={() => setFrgtPasswd(true)}
                        onPressOut={() => setFrgtPasswd(false)}
                        style={({ pressed }) => [
                            {
                                borderBottomColor: pressed
                                    ? "#8EA9C2"
                                    : "transparent",
                            },
                            styles.forgotPasswordBtn,
                        ]}
                    >
                        <Text
                            style={[
                                {
                                    color: frgtPasswd ? "#8EA9C2" : "#000",
                                },
                            ]}
                        >
                            Zapomniałeś/aś hasła?
                        </Text>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? "lightblue"
                                    : "transparent",
                            },
                            styles.registerBtn,
                        ]}
                    >
                        <Text style={styles.register}>REJESTRACJA</Text>
                    </Pressable>
                    <StatusBar style="auto" />
                </LinearGradient>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    imageContainer: {
        backgroundColor: "#d49f98",
        borderRadius: 150 / 2,
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    inputContainer: {
        height: 50,
        width: 250,
        marginTop: 50,
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "black",
    },
    inputUsername: {
        color: "black",
        width: "80%",
        height: "100%",
        textAlign: "center",
        fontSize: 15,
    },
    inputPasswd: {
        color: "black",
        width: "65%",
        height: "100%",
        textAlign: "center",
        fontSize: 15,
    },
    label: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
    },
    logInBtn: {
        display: "flex",
        alignItems: "center",
        marginTop: 40,
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 8,
        paddingBottom: 8,
        width: "60%",
        backgroundColor: "#729fc4",
        borderRadius: 20,
        shadowColor: "rgba(0, 0, 0, 1)",
        elevation: 10,
    },
    logInText: {
        fontSize: 26,
        color: "white",
    },
    forgotPassword: {
        width: 180,
        marginTop: 40,
    },
    forgotPasswordBtn: {
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderBottomWidth: 3,
    },
    register: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    registerBtn: {
        marginTop: 70,
    },
    iconContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    icon: {
        color: "black",
        textAlign: "center",
        width: 30,
        height: 30,
    },
});

export default Login;
