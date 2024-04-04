import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { store,persistor } from './store/redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import RecordScreen from './screens/RecordScreen.js';
import PlaybackScreen from './screens/PlaybackScreen.js';
import Settings from './screens/Settings.js';
import styles from './styles.js';
import CustomDrawerToggle from './components/CustomDrawerToggle.js';

const Drawer = createDrawerNavigator();

function customDrawerContent(props){
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View style={{alignItems:'center'}}>
        <Image source={require('./assets/logo.png')} style={styles.logoImage} />
      </View>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Record')}>
        <Text style={styles.drawerItemText}>Record</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Playback')}>
        <Text style={styles.drawerItemText}>Playback</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Settings')}>
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      "Main": require("./assets/fonts/VT323-Regular.ttf"),
    })
    .then(() => {
     setFontLoaded(true)
    }) 
  }, [])

  if (!fontLoaded) return null;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Text>Loading...</Text>}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={customDrawerContent} screenOptions={{headerStyle:styles.drawerHeader, headerTitleStyle:styles.headerTitle, headerLeft: props => <CustomDrawerToggle {...props}></CustomDrawerToggle>}}>
          <Drawer.Screen name = "Record" component = {RecordScreen}></Drawer.Screen>
          <Drawer.Screen name = "Playback" component = {PlaybackScreen}></Drawer.Screen>
          <Drawer.Screen name = "Settings" component = {Settings}></Drawer.Screen>
        </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}

