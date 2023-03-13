import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import countriesData from '../countries.json';

const initialRegion = {
  latitude: 39.8283,
  longitude: -98.5795,
  latitudeDelta: 50,
  longitudeDelta: 50,
};

const Map = () => {
  const [region, setRegion] = useState(initialRegion);

  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChange={handleRegionChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
