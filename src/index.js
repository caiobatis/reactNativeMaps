import React from 'react';
import Map from './components/Map'
import Search from './components/Search'
import { View } from 'react-native';

// import styles from './styles';

const App = () => (
  <View style={{flex: 1}}>
    
    <Map/>
    <Search/>
  </View>

)


export default App;
