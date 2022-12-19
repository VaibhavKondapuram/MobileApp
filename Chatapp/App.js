import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Chat from './screens/Chat';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Signup /> */}
      <Login />
      <Chat />
      <Home />
      <StatusBar style="auto" />
    </View>
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
