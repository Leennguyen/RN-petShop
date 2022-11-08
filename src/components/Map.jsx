/* eslint-disable prettier/prettier */
import {faLocation} from '@fortawesome/free-solid-svg-icons';
import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {DEFAULT_DELTA, DEFAULT_STORE_LATLNG} from '../constants';
import { API_KEY } from '../constants/googleMap';
import colors from '../theme/colors';
import SmallButtonWithIcon from './SmallButtonWithIcon';


const getLatLng = ({latitude, longitude}) => {
  return {latitude, longitude};
};
const animateToCurrentPosition = (mapRef, callback) => {
  Geolocation.requestAuthorization(
    () => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          const {latitude, longitude} = coords;
          const currentRegion = {
            ...DEFAULT_DELTA,
            latitude,
            longitude,
          };
          mapRef?.current?.animateToRegion(currentRegion, 800);
          callback(currentRegion);
        },
        e => {
          console.log(e.message);
        },
      );
    },
    e => {
      console.log(e.message);
    },
  );
};
export default () => {
  const [region, setRegion] = useState({
    latitude: 16.5254692,
    longitude: 97.1257526,
    ...DEFAULT_DELTA,
  });
  const mapRef = useRef(null);

  useEffect(() => {
    animateToCurrentPosition(mapRef, setRegion);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={region}
        zoomControlEnabled={true}
        onPress={e => {
          const {latitude, longitude} = e.nativeEvent.coordinate;
          setRegion({...region, latitude, longitude});
        }}>
        <Marker
          coordinate={DEFAULT_STORE_LATLNG}
          pinColor={colors.storePinColor}
        />
        <Marker coordinate={getLatLng(region)} />
        <MapViewDirections 
          origin={region}
          destination={DEFAULT_STORE_LATLNG}
          apikey={API_KEY}
          strokeWidth={3}
          strokeColor={colors.storePinColor}
        />
      </MapView>
      <SmallButtonWithIcon
        style={styles.locationBtn}
        icon={faLocation}
        onPress={() => {
          animateToCurrentPosition(mapRef, setRegion);
        }}
      />
    </View>
  );
};

//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 120,
  },
  locationBtn: {
    top: 50,
    right: 20,
  },
});
