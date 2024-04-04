import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function CustomDrawerToggle(props){
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="options" size={24} color="#00ce0f" style={{padding:10}}></Ionicons>
        </TouchableOpacity>
    )
}

export default CustomDrawerToggle;