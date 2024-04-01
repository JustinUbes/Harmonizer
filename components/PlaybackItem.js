import { View, Text, Button } from 'react-native';
import { formatTime } from '../utils/FormatTime.js';
import styles from '../styles.js';

function PlaybackItem({uri,date,length,onPlay,onDelete,onStop}){
    return(
        <View style={styles.playbackContainer}>
            <Text style={styles.playText}>Recorded: {date}</Text>
            <Text style={styles.deleteText}>Length: {formatTime(length)}</Text>
            <View style={styles.playbackButtonContainer}>
                <Button onPress={onPlay} title={"Play"}></Button>
                <Button onPress={onStop} title={"Stop"}></Button>
                <Button onPress={onDelete} title={"Delete"}></Button>
            </View>
        </View>
    )
}

export default PlaybackItem;