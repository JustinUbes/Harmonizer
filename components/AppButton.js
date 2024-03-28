import { TouchableOpacity, StyleSheet, Text } from "react-native";
import styles from '../styles.js'

function AppButton({onPress,title}){
    return(
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
}


export default AppButton;