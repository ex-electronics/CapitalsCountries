import React, { useState } from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Map from './components/Map';
import Regions from './components/Regions';
import Capitals from './components/Capitals';

const App = () => {
  const [region, setRegion] = useState(null);

  const handleRegionSelect = (selectedRegion) => {
    setRegion({ ...selectedRegion, latitudeDelta: 5, longitudeDelta: 5 });
  };

  return (
    <View style={styles.container}>
      <Map />
      <Regions onPress={handleRegionSelect} />
      {region && <Capitals region={region} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;