import { Text, View } from 'react-native';
import { Audio } from 'expo-av';
import { useDispatch, useSelector } from 'react-redux';
import { addRec, delRec } from '../store/redux/recordings.js';
import styles from '../styles.js';

function PlaybackScreen(props){
    const dispatch = useDispatch();
    const recordingUris = useSelector((state) => state.allRecordings.ids);
    return(
        <View style={styles.container}>
            <Text>This is the playback screen.</Text>
        </View>
    )
}

export default PlaybackScreen;