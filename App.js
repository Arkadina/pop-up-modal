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

    const handleOnClick = () => {
        setIsVisible(isVisible ? false : true);
    };

    const Modal = () => {
        return (
            <View style={styles.modalGroup}>
                <View style={styles.modalBg}></View>
                <View style={styles.modalWhite}></View>
            </View>
        );
    };

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Text style={[{ fontFamily: "PopinsRegular" }, styles.btn]} >
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
    },
    btn: {
        backgroundColor: "#1a191a",
        paddingHorizontal: 14,
        paddingVertical: 9,
        borderRadius: 4,
        color: "#ccc",
    },
    modalGroup: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    modalBg: {
        width: "100%",
        backgroundColor: "#1a191a",
        height: "100%",
        borderRadius: 8,
        width: "100%",
        height: "100%",
        opacity: 0.1,
    },
    modalWhite: {
        width: "100%",
        backgroundColor: "#ccc",
        height: "100%",
        position: "absolute",
        borderRadius: 8,
        width: 250,
        height: 400,
        zIndex: 1,
    },
});
