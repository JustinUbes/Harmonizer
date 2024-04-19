import { TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function PlayPauseButton({onPress}){
    return(
    <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection:"row"}}>
        <Ionicons name="play" size={16} color="black" ></Ionicons>
        <Ionicons name="pause" size={16} color="black"></Ionicons>
        </View>
    </TouchableOpacity>
    )
}

export default PlayPauseButton;