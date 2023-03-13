import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Capitals = ({ region }) => {
  const capitalCities = [
    { name: 'London', coordinates: { latitude: 51.5074, longitude: -0.1278 } },
    { name: 'New York', coordinates: { latitude: 40.730610, longitude: -73.935242 } },
  ];

  return (
    <MapView style={styles.map} region={region}>
      {capitalCities.map((capital) => (
        <Marker key={capital.name} coordinate={capital.coordinates} title={capital.name} />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Capitals;
