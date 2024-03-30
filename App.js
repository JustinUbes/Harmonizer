import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { store,persistor } from './store/redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
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
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Text>Loading...</Text>}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name = "Record" component = {RecordScreen}></Drawer.Screen>
          <Drawer.Screen name = "Playback" component = {PlaybackScreen}></Drawer.Screen>
        </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

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
