import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StyledInput from "../components/styled-input";
import StyleButton from "../components/styled-button";
import { router } from "expo-router";

export default function Login() {

    const handleLogin = () => {
        router.replace('home');
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <StyledInput placeholder="Digite seu login" onChangeText={(text) => console.log(text)} />
            <StyledInput placeholder="Digite seu senha" onChangeText={(text) => console.log(text)} />
            <StyleButton text="Entrar" onclick={handleLogin} color="blue" />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
