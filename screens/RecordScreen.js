import { View, Text, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRec, delRec } from '../store/redux/recordings.js';
import { getCurrentDate } from '../utils/CurrentDate.js';
import styles from '../styles.js';
import AppButton from '../components/AppButton.js';

function RecordScreen(props){
    const [recording, setRecording] = useState(null); 
    const [permissionResponse, requestPermission] = Audio.usePermissions();
    const [recordingStatus, setRecordingStatus] = useState(0); 
    const dispatch = useDispatch();

    async function startRecording(){
        try{
            if (permissionResponse.status != 'granted'){
                console.log('Awaiting permission...\n');
                await requestPermission();
            }
            await Audio.setAudioModeAsync({
                allowsRecordingIOS:true,
                playsInSilentModeIOS:true,
            });

            console.log('Starting recording...\n');
            const newRecording = new Audio.Recording(); 
            await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await newRecording.startAsync();
            setRecording(newRecording); 
            setRecordingStatus(1); 
            console.log('Recording started...\n');
        }
        catch(err){
            console.error('Failed to start recording\n',err);
            setRecording(null);
            setRecordingStatus(0);
        }
    }

    async function stopRecording(){
        console.log('Stopping recording...\n');
        setRecordingStatus(0); 
        const { durationMillis } = await recording.getStatusAsync();
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS:false,
        });

        const uri = recording.getURI();
        const milliToFloat = parseFloat(durationMillis);
        dispatch(addRec({uri:uri, date: getCurrentDate(), duration: milliToFloat}));
        console.log('Recording stopped and stored at ',uri);
        setRecording(null); // 
    }

    return(
        <View style={styles.container}>
            <AppButton title={recordingStatus ? 'Stop Recording' : 'Start Recording'} onPress={recordingStatus ? stopRecording : startRecording}></AppButton>
        </View>
    )

}

export default RecordScreen;
