import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Regions = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.region} onPress={() => onPress({ latitude: 51.5074, longitude: -0.1278 })}>
        <Icon name="globe" size={30} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.region} onPress={() => onPress({ latitude: 40.730610, longitude: -73.935242 })}>
        <Icon name="globe" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  region: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default Regions;
