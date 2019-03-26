import React, { Component } from 'react';

import MapView from 'react-native-maps'
import { View } from 'react-native';

// import styles from './styles';

export default class Map extends Component {

  state = {
    region: null
  }

  async componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      ({
        coords: { latitude, longitude }
      }) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }
        })
      },
      (res) => {
        console.log(res)
      },
      {
        timeout: 2000,
        enableHighAccuracy: true
      }
    )
  }

  render() {

    const {
      region
    } = this.state

    return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 37.785834,
          longitude: -122.406417,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134
        }}
        showsUserLocation
        loadingEnabled
      />
    </View>
    )
  }
}