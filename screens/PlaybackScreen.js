import { View, FlatList, Image } from 'react-native';
import { useState, useRef } from 'react';
import { Audio } from 'expo-av';
import { useDispatch, useSelector } from 'react-redux';
import { delRec } from '../store/redux/recordings.js';
import styles from '../styles.js';
import PlaybackItem from '../components/PlaybackItem.js';
import * as FileSystem from 'expo-file-system';

function PlaybackScreen(props){
    const [isPlaying,setIsPlaying] = useState(false);
    const [currentAudioUri, setCurrentAudioUri] = useState(null);
    const dispatch = useDispatch();
    const recordingUris = useSelector((state) => state.allRecordings.recordings);
    const player = useRef(new Audio.Sound());
    const [positionMap,setPositionMap] = useState({});

    function setPosition(uri, newPosition) {
        setPositionMap(prevPositionMap => ({ ...prevPositionMap, [uri]: newPosition }));
    }

    async function playPauseAudio(uri){
        try {
            if (isPlaying) {
                await stopPlaying();
                setIsPlaying(false);
            } else {
                if (currentAudioUri !== uri) {
                    await stopPlaying();
                    await player.current.loadAsync({ uri: uri }, {}, true);
                    setCurrentAudioUri(uri);
                }
                await player.current.setPositionAsync(positionMap[uri]);
                await player.current.playAsync();
                setIsPlaying(true);
            }
        } catch(err) {
            console.error("Error playing/pausing audio: ", err);
        }
    }

    async function stopPlaying(){
        try{
            if(!player.current){
                console.log("Player not initialized.")
                return;
            } 
            const playerStatus = await player.current.getStatusAsync();

            if(playerStatus.isLoaded){
                await player.current.stopAsync();
                await player.current.unloadAsync();
                setCurrentAudioUri(null);
            }

            setIsPlaying(false);
        }
        catch(err){
            console.error("Error stopping audio: ",err);
        }
    }

    async function deleteRecording(uri){
        try{
            if (isPlaying){
                stopPlaying()
            }
            dispatch(delRec({ uri: uri }));
            await FileSystem.deleteAsync(uri);
        }
        catch(err){
            console.error(err);
        }
    }
    

    function renderItem({ item }) {
        return (
            <PlaybackItem 
                key={item.uri}
                uri={item.uri}
                date={item.date}
                length={item.duration} 
                onPlay={() => playPauseAudio(item.uri)}
                onDelete={() => deleteRecording(item.uri)}
                setPosition={setPosition}
            />
        );
    }
    

    const keyExtractor = (item) => item.uri;

    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logoImage}></Image>
            <FlatList
                data={recordingUris}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            >
            </FlatList>
        </View>
    )
}

export default PlaybackScreen;