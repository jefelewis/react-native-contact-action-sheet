
// Imports: Dependencies
import React from 'react';
import { SafeAreaView } from 'react-native';

// Imports: Components
import ContactActionSheet from './src/ContactActionSheet';

// React Native App
const App = () => {

  return (
    <SafeAreaView style={{ display: 'flex', flex: 1 }}>
      <ContactActionSheet />
    </SafeAreaView>
  )
};

// Exports
export default App;
