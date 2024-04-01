import { Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import { Audio } from 'expo-av';
import { useDispatch, useSelector } from 'react-redux';
import { delRec } from '../store/redux/recordings.js';
import styles from '../styles.js';
import PlaybackItem from '../components/PlaybackItem.js';

function PlaybackScreen(props){
    const [isPlaying,setIsPlaying] = useState(false);
    const dispatch = useDispatch();
    const recordingUris = useSelector((state) => state.allRecordings.recordings);
    const player = new Audio.Sound();

    async function playAudio(uri){
        try{
            if(!player){
                console.log("Player not intialzed.");
                return;
            }
            console.log("Im in playAudio");
            await player.loadAsync({uri:uri},{},true);

            const playerStatus = await player.getStatusAsync();

            if(playerStatus.isLoaded){
                if(!(playerStatus.isPlaying)){
                    player.playAsync();
                    setIsPlaying(true);
                }
            }
        }
        catch(err){
            console.error("Error playing audio: ",err);
        }
    }

    async function stopPlaying(){
        try{
            if(!player){
                console.log("Player not initialized.")
                return;
            } 
            const playerStatus = await player.getStatusAsync();

            if(playerStatus.isLoaded){
                await player.unloadAsync();
            }

            setIsPlaying(false);
        }
        catch(err){
            console.error("Error stopping audio: ",err);
        }
    }

    async function deleteRecording(uri){
        try{
            dispatch(delRec({ uri: uri }));
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