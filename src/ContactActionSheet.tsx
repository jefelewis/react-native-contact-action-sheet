// Imports: Dependencies
import React, { useState } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { ActionSheetCustom } from 'react-native-custom-actionsheet';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

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
  const [ selected, selectContact ] = useState(false);

  let actionSheet: any = null;

  // React Hooks: Lifecycle Methods

  const showActionSheet = () => {
    actionSheet.show();
  };
 
  const getActionSheetRef = (ref: any) => {
    actionSheet = ref;
  };
 
  const handlePress = (index: any) => selectContact(index);

  // Press Call
  const pressCall = (phoneNumber: string) => {
    try {
      // Call Phone Number
      Linking.openURL(`tel:${phoneNumber}`);
    }
    catch (error) {
      console.log(error);
    }
  };

  const CANCEL_INDEX = 0
  const DESTRUCTIVE_INDEX = 4
  const options = [
    'Cancel',
    {
      component: <View style={{ display: 'flex', flexDirection: 'row', width: width - 32, alignItems: 'center' }}>
          <Icon name="ios-call" size={28} style={{ marginLeft: 16, marginRight: 24 }} color="#323232"></Icon>
          <View>
            <Text style={{ fontFamily: 'System', fontSize: 17, fontWeight: '500', marginBottom: 4, color: '#323232' }}>Building Department</Text>
            <Text style={{ fontFamily: 'System', fontSize: 15, fontWeight: '400', color: '#7D7D7D' }}>(555) 555-5555</Text>
          </View>
        </View>,
      height: 70,
    },
    {
      component: <View style={{ display: 'flex', flexDirection: 'row', width: width - 32, alignItems: 'center' }}>
          <Icon name="ios-call" size={28} style={{ marginLeft: 16, marginRight: 24 }} color="#323232"></Icon>
          <View>
            <Text style={{ fontFamily: 'System', fontSize: 17, fontWeight: '500', marginBottom: 4, color: '#323232' }}>City Clerk</Text>
            <Text style={{ fontFamily: 'System', fontSize: 15, fontWeight: '400', color: '#7D7D7D' }}>(777) 777-7777</Text>
          </View>
        </View>,
      height: 70,
    },
    {
      component: <View style={{ display: 'flex', flexDirection: 'row', width: width - 32, alignItems: 'center' }}>
          <Icon name="ios-mail" size={28} style={{ marginLeft: 16, marginRight: 24 }} color="#323232"></Icon>
          <View>
            <Text style={{ fontFamily: 'System', fontSize: 17, fontWeight: '500', marginBottom: 4, color: '#323232' }}>Building Department</Text>
            <Text style={{ fontFamily: 'System', fontSize: 15, fontWeight: '400', color: '#7D7D7D' }}>building@city.com</Text>
          </View>
        </View>,
      height: 70,
    },
    {
      component: <View style={{ display: 'flex', flexDirection: 'row', width: width - 32, alignItems: 'center' }}>
          <Icon name="ios-mail" size={28} style={{ marginLeft: 16, marginRight: 24 }} color="#323232"></Icon>
          <View>
            <Text style={{ fontFamily: 'System', fontSize: 17, fontWeight: '500', marginBottom: 4, color: '#323232' }}>City Clerk</Text>
            <Text style={{ fontFamily: 'System', fontSize: 15, fontWeight: '400', color: '#7D7D7D' }}>cityclerk@city.com</Text>
          </View>
        </View>,
      height: 70,
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Text>Hi</Text> */}

      <Button
        title="Show Action Sheet"
        onPress={showActionSheet}
      />

      <ActionSheetCustom
        ref={getActionSheetRef}
        // title={'null'}
        // message="custom message custom message custom message custom message custom message custom message "
        options={options}
        cancelButtonIndex={CANCEL_INDEX}
        destructiveButtonIndex={DESTRUCTIVE_INDEX}
        onPress={handlePress}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // width: width - 32,
    // marginLeft: 16,
    // marginRight: 16,
    // justifyContent: 'center',
  },
  contactContainer: {
    display: 'flex',
    justifyContent: "space-between",
  },
});

// Exports
export default ContactActionSheet;
