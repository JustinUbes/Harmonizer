import { View, Text, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Slider from '@react-native-community/slider';
import { formatTime } from '../utils/FormatTime.js';
import styles from '../styles.js';
import PlayPauseButton from '../components/PlayPauseButton.js';
import TrashButton from './TrashButton.js';

function PlaybackItem({uri,date,length,onPlay,onDelete,setPosition}){
    const [position,localSetPosition] = useState(0);


    function onSeek(val){
        localSetPosition(val);
        setPosition(uri,val);

    }


    return(
        <View style={styles.playbackContainer}>
            <View style={{alignItems:'center'}}>
            <Text style={styles.recordedText}>{date}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.lengthText}>{formatTime(position)}</Text>
                <Slider
                    style={{ flex: 1, marginHorizontal: 10 }}
                    minimumValue={0}
                    maximumValue={length}
                    value={position}
                    onValueChange={onSeek}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#FFFFFF"
                />
                <Text style={styles.lengthText}>{formatTime(length)}</Text>
            </View>
            <View style={styles.playbackButtonContainer}>
                <PlayPauseButton onPress={onPlay}></PlayPauseButton>
                <TrashButton onPress={onDelete}></TrashButton>
            </View>
        </View>
    )
}

export default PlaybackItem;