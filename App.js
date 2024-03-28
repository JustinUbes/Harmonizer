import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import RecordScreen from './screens/RecordScreen.js';
import PlaybackScreen from './screens/PlaybackScreen.js';

const Drawer = createDrawerNavigator();

function customDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      
    </DrawerContentScrollView>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = "Record" component = {RecordScreen}></Drawer.Screen>
        <Drawer.Screen name = "Playback" component = {PlaybackScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
