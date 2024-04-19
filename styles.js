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
        fontFamily: 'Main'
    },

    container:{
        flex:1,
        justifyContent: "space-evenly",
        flexDirection:'column',
        alignItems:'center',
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
        padding:5
      },

    recordedText:{
        color:'#000',
        fontFamily:"Main"
    },

    lengthText:{
        color:'#000',
        fontFamily:"Main"
    },

    turntable: {
        resizeMode:'contain',
        width:200,
        height: 200,
        
    },

    logoImage:{
        resizeMode:'contain',
        width:200,
        height:200
    },

    drawerContainer:{
        backgroundColor:'black',
        justifyContent:'flex-start',
        flexDirection:"column",
        height:'100%'
    },

    drawerItem: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: harmonizerGreen,
      },

    drawerItemText: {
        fontSize: 18,
        fontFamily: 'Main',
        color: harmonizerGreen,
    },

    drawerHeader:{
        backgroundColor:'black',
    },

    headerTitle:{
        color:'black',
    },

    timerText:{
        color:harmonizerGreen,
        fontFamily:"Main",
        fontSize: 24,
    }

});

export default styles;
