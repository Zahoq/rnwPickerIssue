import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const App = () => {
  return (
    <View style={styles.container}>
      <Picker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
