import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Animated, {
    Layout,
    LightSpeedInLeft,
    LightSpeedOutRight,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
import randomColor from "../utils/randomBackground";

export default function Modal({ setIsVisible }) {
    const [color, setColor] = useState(null);
    const offset = useSharedValue("blue");

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: offset.value,
        };
    });

    const handleRandomColor = () => {
        const colorGenerated = randomColor();
        setColor(colorGenerated);
        offset.value = `#${colorGenerated}`;
    };

    return (
        <Animated.View
            style={styles.modalGroup}
            entering={LightSpeedInLeft}
            layout={Layout.springify()}
            exiting={LightSpeedOutRight}
        >
            <Animated.View
                style={[styles.modalBg, animatedStyle]}
                onPress={() => setIsVisible(false)}
            ></Animated.View>
            <View style={[styles.modalWhite]}>
                <Pressable onPress={() => handleRandomColor()}>
                    <Text style={{ fontFamily: "PopinsRegular" }}>
                        Change Background
                        <Text style={styles.colorText}> {color}</Text>
                    </Text>
                </Pressable>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
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
        height: "100%",
        borderRadius: 8,
        width: "100%",
        height: "100%",
        opacity: 0.1,
    },
    modalWhite: {
        width: "100%",
        backgroundColor: "#fff",
        height: "100%",
        position: "absolute",
        borderRadius: 8,
        width: 250,
        height: 400,
        zIndex: 1,
        elevation: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    colorText: {
        fontWeight: "bold",
        fontSize: 14,
        fontFamily: "PopinsBlack",
    },
});
