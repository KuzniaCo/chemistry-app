import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Pressable,
} from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";
import LoginSvg from "./LoginSvg";
import { useSpring, animated } from "@react-spring/native"

const Login = () => {
    const [ passwordIcon, setPasswordIcon ] = useState("eye-off");
    const [ isHidden, setIsHidden ] = useState(true);

    const [ loginBtnAnim, loginBtnAnimApi ] = useSpring(() => ({
        backgroundColor: "#466178",
    }));

    const [ forgotPasswdBtnAnim, forgotPasswdBtnAnimApi ] = useSpring(() => ({
        backgroundColor: "#fff0",
    }));

    const [ registerBtnAnim, registerBtnAnimApi ] = useSpring(() => ({
        backgroundColor: "#fff0",
    }));

    return (
        <SafeAreaView style={ styles.container }>
            <StatusBar style="auto"/>
            <LoginSvg style={ styles.backgroundSvg }/>

            <View style={[ styles.imageContainer, styles.shadow ]}>
                <Text>logo/nazwa</Text>
            </View>

            <View style={ styles.inputContainer }>
                <FeatherIcon
                    name="user"
                    style={[ styles.icon, { textAlign: "left" } ]}
                />

                <TextInput
                    style={ styles.input }
                    placeholder="Nazwa użytkownika"
                    placeholderTextColor="#4f5961"
                />
            </View>

            <View style={ styles.inputContainer }>
                <FeatherIcon
                    name="lock"
                    style={[ styles.icon, { textAlign: "left" } ]}
                />

                <TextInput
                    secureTextEntry={ isHidden }
                    style={ styles.input }
                    placeholder="Hasło"
                    placeholderTextColor="#4f5961"
                />

                <Pressable
                    onPressIn={() => {
                        if (isHidden) {
                            setPasswordIcon("eye");
                        } else {
                            setPasswordIcon("eye-off");
                        }

                        setIsHidden(!isHidden);
                    }}

                    hitSlop={{
                        top: 10,
                        bottom: 10,
                        left: 10,
                        right: 10,
                    }}

                    style={{ width: "100%" }}
                >
                    <FeatherIcon
                        name={ passwordIcon }
                        style={[ styles.icon, { textAlign: "right" } ]}
                    />
                </Pressable>
            </View>

            <Pressable
                onPressIn={() => loginBtnAnimApi.start({
                    backgroundColor: "#467876",
                })}

                onPressOut={() => loginBtnAnimApi.start({
                    backgroundColor: "#466178",
                })}

                style={{ width: "60%" }}
            >
                <animated.View style={[
                    styles.loginButton, 
                    styles.shadow, 
                    loginBtnAnim 
                ]}>
                    <Text style={ styles.loginText }>Zaloguj się</Text>
                </animated.View>
            </Pressable>

            <Pressable
                onPressIn={() =>
                    forgotPasswdBtnAnimApi.start({
                        backgroundColor: "#add8e6",
                })}

                onPressOut={() =>
                    forgotPasswdBtnAnimApi.start({
                        backgroundColor: "#fff0",
                })}

                style={{ marginTop: 20 }}
            >
                <animated.Text style={[
                    { color: "#000" },
                    styles.lightBluePress,
                    forgotPasswdBtnAnim
                ]}>
                    Zapomniałeś/aś hasła?
                </animated.Text>
            </Pressable>

            <Pressable
                onPressIn={() =>
                    registerBtnAnimApi.start({
                        backgroundColor: "#add8e6",
                })}

                onPressOut={() =>
                    registerBtnAnimApi.start({
                        backgroundColor: "#fff0",
                })}

                style={{ marginTop: 70 }}
            >
                <animated.Text style={[ 
                    styles.registerText,
                    styles.lightBluePress,
                    registerBtnAnim
                ]}>
                    REJESTRACJA
                </animated.Text>
            </Pressable>
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

    backgroundSvg: {
        position: "absolute"
    },

    shadow: {
        shadowColor: "#000",
    
        // iOS
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    
        // android
        elevation: 10,
    },

    imageContainer: {
        backgroundColor: "#d49f98",
        borderRadius: 150 / 2,
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },

    inputContainer: {
        flexDirection: "row",
        height: 50,
        width: 250,
        marginTop: 50,
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#000",
    },

    input: {
        color: "#000",
        width: "60%",
        height: "100%",
        textAlign: "center",
        fontSize: 15,
    },

    icon: {
        color: "#000",
        fontSize: 26,
        width: "20%",
        paddingLeft: "4%",
        paddingRight: "4%",
    },

    loginButton: {
        alignItems: "center",
        marginTop: 40,
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 8,
        paddingBottom: 8,
        width: "100%",
        backgroundColor: "#466178",
        borderRadius: 20,
    },

    loginText: {
        fontSize: 26,
        color: "#fff",
    },

    lightBluePress: {
        paddingRight: 7,
        paddingLeft: 7,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 12,
    },

    registerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
});

export default Login;
