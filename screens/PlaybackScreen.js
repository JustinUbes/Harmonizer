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
    const dispatch = useDispatch();
    const recordingUris = useSelector((state) => state.allRecordings.recordings);
    const player = useRef(new Audio.Sound());

async function playAudio(uri){
    try{
        if(!player.current){
            console.log("Player not initialized.");
            return;
        }

        await stopPlaying();

        await player.current.loadAsync({uri:uri},{},true);

        await player.current.playAsync();
        setIsPlaying(true);
    }
    catch(err){
        console.error("Error playing audio: ",err);
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
                await player.current.unloadAsync();
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
                onPlay={() => playAudio(item.uri)} 
                onDelete={() => deleteRecording(item.uri)}
                onStop={() => stopPlaying()}
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