import { Button } from "react-native";

interface StyledButtonProps {
    text: string
    onclick: () => void
    color: string
}

export default function StyleButton({ text, onclick, color }: StyledButtonProps) {
    return (
        <Button
            color={color}
            onPress={onclick}
            title={text}
        />
    )
}