import { StyleSheet, Text } from "react-native";
import * as Font from "expo-font";
import { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "./components/modal";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isVisible, setIsVisible] = useState(false);
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

    const handleOnPress = () => {
        setIsVisible(isVisible ? false : true);
    };

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <Text
                style={[
                    { fontFamily: "PopinsRegular", marginBottom: 20 },
                    styles.btn,
                ]}
                onPress={(e) => handleOnPress()}
            >
                Click here to see the modal.
            </Text>
            {isVisible ? <Modal setIsVisible={setIsVisible} /> : null}
        </SafeAreaView>
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
        fontSize: 16,
        backgroundColor: "#1a191a",
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 4,
        color: "#ccc",
        zIndex: 22,
    },
});
