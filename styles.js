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

    }
});

export default styles;
