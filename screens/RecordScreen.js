import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Audio } from 'expo-av';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRec, delRec } from '../store/redux/recordings.js';
import { getCurrentDate } from '../utils/CurrentDate.js';
import styles from '../styles.js';
import AppButton from '../components/AppButton.js';
import { formatTime } from '../utils/FormatTime.js';


function RecordScreen(props){
    const [recording, setRecording] = useState(null); 
    const [permissionResponse, requestPermission] = Audio.usePermissions();
    const [recordingStatus, setRecordingStatus] = useState(0); 
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);
    const dispatch = useDispatch();

    function startTimer()
    {
        if (intervalRef.current === null) {
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
    }
    }

    function stopTimer(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
            
    }
    
    function resetTimer(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setSeconds(0);
      };

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
            startTimer();
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
        stopTimer();
        resetTimer();

        await Audio.setAudioModeAsync({
            allowsRecordingIOS:false,
        });

        const uri = recording.getURI();
        dispatch(addRec({uri:uri, date: getCurrentDate(), duration: durationMillis}));
        console.log('Recording stopped and stored at ',uri);
        setRecording(null); // 
    }

    return(
        <View style={styles.container}>
            <Image source={require('../assets/turntable.png')} style={styles.turntable}></Image>
            <Text style={styles.timerText}>{formatTime(seconds*1000)}</Text>
            <AppButton title={recordingStatus ? 'Stop Recording' : 'Start Recording'} onPress={recordingStatus ? stopRecording : startRecording}></AppButton>
        </View>
    )

}

export default RecordScreen;
