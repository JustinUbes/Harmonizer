import { View, Text, Button } from 'react-native';
import { formatTime } from '../utils/FormatTime.js';
import styles from '../styles.js';
import AppButton from '../components/AppButton.js';

function PlaybackItem({uri,date,length,onPlay,onDelete,onStop}){
    return(
        <View style={styles.playbackContainer}>
            <Text style={styles.recordedText}>Recorded: {date}</Text>
            <Text style={styles.lengthText}>Length: {formatTime(length)}</Text> 
            <View style={styles.playbackButtonContainer}>
                <AppButton onPress={onPlay} title="Play"></AppButton>
                <AppButton onPress={onStop} title="Stop"></AppButton>
                <AppButton onPress={onDelete} title="Delete"></AppButton>
            </View>
        </View>
    )
}

export default PlaybackItem;