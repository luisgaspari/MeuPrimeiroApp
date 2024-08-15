import { TextInput, StyleSheet } from "react-native";

interface StyledInputProps {
    placeholder: string
    onChangeText: (text: string) => void
}

export default function StyleInput({ placeholder, onChangeText }: StyledInputProps) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        height: 40,
        margin: 12,
        borderWidth: 1
    }
})

