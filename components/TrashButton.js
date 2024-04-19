import { TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function TrashButton({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="trash" size={16} style={{}}></Ionicons>
        </TouchableOpacity>
    )
}

export default TrashButton;