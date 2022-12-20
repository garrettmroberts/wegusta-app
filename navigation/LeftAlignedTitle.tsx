import { Text, StyleSheet } from "react-native";
import Fonts from "../constants/Fonts";



type LeftAlignedTitleProps = {
    title: string
}

const LeftAlignedTitle = ({ title }: LeftAlignedTitleProps) => {
    return (
        <Text style={styles.text}>{ title }</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        ...Fonts.h1Bold
    }
});

export default LeftAlignedTitle;