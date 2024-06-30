import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Board from './src/components/Board';

export default function App() {
  return (
    <SafeAreaView style={styles.containerSafe}>
      <StatusBar hidden/>
      <View style={styles.container}>
        <Board/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafe:{
    flex:1,
    backgroundColor:'plum'
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
