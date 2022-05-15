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
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
    const [forgotPassword, setForgotPassword] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState("eye-slash");
    const [isHidden, setIsHidden] = useState(true);
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
                                onPressIn={() => {
                                    if (isHidden == true) {
                                        setPasswordIcon("eye");
                                        setIsHidden(!isHidden);
                                    } else {
                                        setPasswordIcon("eye-slash");
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
                                    name={passwordIcon}
                                    style={styles.icon}
                                    size={26}
                                />
                            </Pressable>
                        </View>
                        <TextInput
                            secureTextEntry={isHidden}
                            style={styles.inputPassword}
                            placeholder="Hasło"
                            placeholderTextColor="#4f5961"
                        ></TextInput>
                    </View>
                    <TouchableOpacity style={styles.logInButton}>
                        <Text style={styles.logInText}>Zaloguj się</Text>
                    </TouchableOpacity>
                    <Pressable
                        onPressIn={() => setForgotPassword(true)}
                        onPressOut={() => setForgotPassword(false)}
                        style={({ pressed }) => [
                            {
                                borderBottomColor: pressed
                                    ? "#8EA9C2"
                                    : "transparent",
                            },
                            styles.forgotPasswordButton,
                        ]}
                    >
                        <Text
                            style={[
                                {
                                    color: forgotPassword ? "#8EA9C2" : "#000",
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
                            styles.registerButton,
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
    inputPassword: {
        color: "black",
        width: "65%",
        height: "100%",
        textAlign: "center",
        fontSize: 15,
    },
    logInButton: {
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
    forgotPasswordButton: {
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
    registerButton: {
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
