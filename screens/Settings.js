import { View, Image } from 'react-native';
import styles from '../styles.js';
import AppButton from '../components/AppButton.js';
import { useDispatch, useSelector } from 'react-redux';
import { clearRec } from '../store/redux/recordings.js';

function Settings(props){
    const dispatch = useDispatch();
    const recordingUris = useSelector((state) => state.allRecordings.recordings);

    function clearAllRecordings(){
        dispatch(clearRec());
    }

    return(
        <View style={styles.container}>
            <Image source={require('../assets/splash.png')} style={styles.logoImage}></Image>
            <AppButton title="Clear Recordings" onPress={clearAllRecordings}></AppButton>
        </View>
    )
}

export default Settings;