import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello !</Text>
      <Button title='Just click me...' color="#841584" />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 38,
    color: '#fff'
  },

  container: {
    flex: 1,
    backgroundColor: '#f0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
