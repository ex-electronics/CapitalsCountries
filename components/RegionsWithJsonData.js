import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Map from './components/Map';
import countriesData from './countries.json';

const Regions = ({ onRegionSelected }) => {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    const uniqueRegions = Array.from(
      new Set(countriesData.map((country) => country.region))
    );
    setRegions(uniqueRegions);
  }, []);

  const handleRegionPress = (region) => {
    setSelectedRegion(region);
    onRegionSelected(region);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regions</Text>
      <View style={styles.regionsContainer}>
        {regions.map((region) => (
          <TouchableOpacity
            key={region}
            onPress={() => handleRegionPress(region)}
            style={[
              styles.regionButton,
              selectedRegion === region && styles.selectedRegionButton,
            ]}
          >
            <Text
              style={[
                styles.regionText,
                selectedRegion === region && styles.selectedRegionText,
              ]}
            >
              {region}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  regionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  regionButton: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  selectedRegionButton: {
    backgroundColor: '#3d85c6',
  },
  regionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedRegionText: {
    color: '#fff',
  },
});

export default Regions;
