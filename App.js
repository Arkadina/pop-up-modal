import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isVisible, setIsVisible] = useState(true);
    const [fontsLoaded] = Font.useFonts({
        PopinsBlack: require("./assets/fonts/poppins/Poppins-Black.ttf"),
        PopinsRegular: require("./assets/fonts/poppins/Poppins-Regular.ttf"),
        PopinsBold: require("./assets/fonts/poppins/Poppins-Bold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const Modal = () => {
        return (
            <View style={styles.modal}>
                <Text>4242.</Text>
            </View>
        );
    };

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Text style={[{ fontFamily: "PopinsRegular" }, styles.btn]}>
                Click here to see the modal.
            </Text>
            {isVisible ? <Modal /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        fontFamily: "PopinsRegular",
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    btn: {
        backgroundColor: "#1a191a",
        paddingHorizontal: 14,
        paddingVertical: 9,
        borderRadius: 4,
        color: "#ccc",
    },
    modal: {
        width: "100%",
        backgroundColor: "#ccc",
        height: "100%",
        position: "absolute",
        borderRadius: 8,
        width: 250,
        height: 300,
        top: "40%",
    },
});
