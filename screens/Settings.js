import { View, Text, Button } from 'react-native';
import styles from '../styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { clearRec } from '../store/redux/recordings.js';

function Settings(props){
    const dispatch = useDispatch();
    const recordingUris = useSelector((state) => state.allRecordings.recordings);

    function clearAllRecordings(){
        dispatch(clearRec());
    }

    return(
        <View>
            <Button title="Clear Recordings" onPress={clearAllRecordings}></Button>
        </View>
    )
}

export default Settings;