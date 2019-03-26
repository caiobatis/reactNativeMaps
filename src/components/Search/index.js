import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { View } from 'react-native';
import { Platform } from 'react-native';

// import styles from './styles';

export default class Search extends Component {
  render() {
    return <GooglePlacesAutocomplete
      placeholder='Para onde?'
      placeholderTextColor='#333'
      onPress={()=> {}}
      query={{
        key: 'AIzaSyDDCQ5xHRPLyXXRFwwBw4N66PQ9RKTq6xY',
        language: 'pt'
      }}
      textInputProps={{
        autoCaptalize: 'none',
        autoCorret: false
      }}
      fetchDetails
      enablePoweredByContainer={false}
      styles={{
        container: {
          position: 'absolute',
          top: Platform.select({ ios: 60, android: 40 }),
          width: '100%'
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          marginHorizontal: 20,
          borderTopWidth: 0,
          borderBottomWidth: 0
        },
        textInput: {
          height: 54,
          margin: 0,
          borderRadius: 0,
          padding: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: '#ddd',
          fontSize: 17
        },
        listView: {
          borderWidth: 1,
          borderColor: '#ddd',
          marginHorizontal: 20,
          backgroundColor: '#fff',
          elevation: 5,
          marginTop: 10,


        }

      }}
    />
  }
}
