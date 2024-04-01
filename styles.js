import { StyleSheet } from 'react-native';

const harmonizerGreen = "#00ce0f";

const styles = StyleSheet.create({
    appButtonContainer:{
        backgroundColor:harmonizerGreen,
        borderRadius:10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },

    appButtonText:{
        fontSize:18,
        color:"black",
        fontWeight:"bold",
        alignSelf:"center",
        textTransform:"uppercase",
    },

    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor: 'black',
        padding: 10,

    },

    playbackContainer:{
        backgroundColor:harmonizerGreen,
        borderRadius:5,
        borderWidth:1,
        padding:10,
        padding:10
    },

    playbackButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

    recordedText:{
        color:harmonizerGreen,
    },

    lengthText:{
        color:harmonizerGreen,
    }
});

export default styles;
