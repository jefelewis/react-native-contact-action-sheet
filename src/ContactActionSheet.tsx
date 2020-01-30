// Imports: Dependencies
import React, { useState } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
// interface Props {
//   title?: string;
//   mode: 'calendar' | 'spinner' | 'default';
//   onChange: (date: Date | string) => Date | string | void;
// }

// Component: Contact Action Sheet
const ContactActionSheet = (props) => {
  // React Hooks: State
  // const [ modalVisible, toggle ] = useState(false);

  // React Hooks: Lifecycle Methods

  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: width - 32,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'center',
  },
});

// Exports
export default ContactActionSheet;
