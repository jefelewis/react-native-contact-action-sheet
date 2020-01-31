// Imports: Dependencies
import React, { useState } from 'react';
import { ActionSheetIOS, Button, Dimensions, Platform, StyleSheet, Text, View, Linking, TouchableOpacity, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { ActionSheetCustom } from 'react-native-custom-actionsheet';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Contact {
  title: string;
  type: 'Email' | 'Phone Number';
  contact: string;
}

interface Props {
  contactsList: Array<Contact>,
}




// interface Props {
//   title?: string;
//   mode: 'calendar' | 'spinner' | 'default';
//   onChange: (date: Date | string) => Date | string | void;
// }

// Component: Contact Action Sheet
const ContactActionSheet = (props: Props) => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState(false);
  const [ selected, selectContact ] = useState(false);

  // React Hooks: Lifecycle Methods

  // Toggle Modal
  const toggleModal = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggle((modalVisible: boolean) => !modalVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };
  
  let actionSheet: any = null;
  const showCustomActionSheet = () => {
    actionSheet.show();
  };
 
  const getActionSheetRef = (ref: any) => {
    actionSheet = ref;
  };
 
  const handlePress = (index: any) => selectContact(index);


  // Native Action Sheet
  const showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Call (Building Department)', 'Call (City Clerk)', 'Email (Building Department)', 'Email (City Clerk)'],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          /* destructive action */
        }
      },
    );
  };

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
    'Test #1',
    'Test #2',
    'Test #3',
    // {
    //   component: <View style={{ display: 'flex', flexDirection: 'row', width: width - 32, alignItems: 'center' }}>
    //       <Icon name="ios-call" size={28} style={{ marginLeft: 16, marginRight: 24 }} color="#323232"></Icon>
    //       <View>
    //         <Text style={{ fontFamily: 'System', fontSize: 17, fontWeight: '500', marginBottom: 4, color: '#323232' }}>Building Department</Text>
    //         <Text style={{ fontFamily: 'System', fontSize: 15, fontWeight: '400', color: '#7D7D7D' }}>(555) 555-5555</Text>
    //       </View>
    //     </View>,
    //   height: 70,
    // },
    // {
    //   component: <View style={{ display: 'flex', flexDirection: 'row', width: width - 32, alignItems: 'center' }}>
    //       <Icon name="ios-call" size={28} style={{ marginLeft: 16, marginRight: 24 }} color="#323232"></Icon>
    //       <View>
    //         <Text style={{ fontFamily: 'System', fontSize: 17, fontWeight: '500', marginBottom: 4, color: '#323232' }}>City Clerk</Text>
    //         <Text style={{ fontFamily: 'System', fontSize: 15, fontWeight: '400', color: '#7D7D7D' }}>(777) 777-7777</Text>
    //       </View>
    //     </View>,
    //   height: 70,
    // },
    // {
    //   component: <View style={{ display: 'flex', flexDirection: 'row', width: width - 32, alignItems: 'center' }}>
    //       <Icon name="ios-mail" size={28} style={{ marginLeft: 16, marginRight: 24 }} color="#323232"></Icon>
    //       <View>
    //         <Text style={{ fontFamily: 'System', fontSize: 17, fontWeight: '500', marginBottom: 4, color: '#323232' }}>Building Department</Text>
    //         <Text style={{ fontFamily: 'System', fontSize: 15, fontWeight: '400', color: '#7D7D7D' }}>building@city.com</Text>
    //       </View>
    //     </View>,
    //   height: 70,
    // },
    // {
    //   component: <View style={{ display: 'flex', flexDirection: 'row', width: width - 32, alignItems: 'center' }}>
    //       <Icon name="ios-mail" size={28} style={{ marginLeft: 16, marginRight: 24 }} color="#323232"></Icon>
    //       <View>
    //         <Text style={{ fontFamily: 'System', fontSize: 17, fontWeight: '500', marginBottom: 4, color: '#323232' }}>City Clerk</Text>
    //         <Text style={{ fontFamily: 'System', fontSize: 15, fontWeight: '400', color: '#7D7D7D' }}>cityclerk@city.com</Text>
    //       </View>
    //     </View>,
    //   height: 70,
    // },
  ];


  // Render Contact Selectors
  const renderContactSelectors = (props: Props) => {
    try {
      if (props.contactsList.length >= 6) {
        console.warn('Error: Maximum of 6 contacts allowed.');
      }
      else {
        return props.contactsList.map((contact: Contact) => {
          // IF/ELSE FOR EMAIL/PHONE NUMBER
          // return (
            <View style={styles.contactSelector}>
              <Text>{contact.title}</Text>
              <Text>{contact.contact}</Text>
            </View>
          // );
        });
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text>Hi</Text> */}

      <Button
        title="Show Native Action Sheet"
        onPress={showActionSheet}
      />

      <Button
        title="Show Custom Action Sheet"
        onPress={showCustomActionSheet}
      />

      <Button
        title="Show Modal"
        onPress={() => toggleModal()}
      />

      <ActionSheetCustom
        ref={getActionSheetRef}
        // title={'null'}
        // message="custom message custom message custom message custom message custom message custom message "
        options={options}
        cancelButtonIndex={CANCEL_INDEX}
        destructiveButtonIndex={DESTRUCTIVE_INDEX}
        onPress={handlePress}
        style={styles.actionSheetContainer}
      />

      <Modal
        isVisible={modalVisible}
        style={styles.modal}
        backdropOpacity={.30}
        onBackdropPress={() => alert('Fuck')}
      >
        <View style={styles.modalContainer}>
          <View style={styles.contactListContainer}>
            {/* {renderContactSelectors(props)} */}
            <TouchableOpacity style={styles.contactSelector}>
              <Icon name="ios-call" size={28} style={styles.icon} color="#323232"></Icon>
              <View>
                <Text style={styles.contactTitle}>{props.contactsList[0].title}</Text>
                <Text style={styles.emailPhone} numberOfLines={1}>{props.contactsList[0].contact}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => toggleModal()} style={styles.cancelButtonContainer}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  modal: {
    margin: 0,
  },
  modalContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  contactListContainer: {
    width: width - 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  contactSelector: {
    width: width - 20,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 16,
    marginRight: 24,
  },
  contactTitle: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 4,
    color: '#323232',
    width: width - 20 - 20 - 50,
  },
  emailPhone: {
    fontFamily: 'System',
    fontSize: 15,
    fontWeight: '400',
    color: '#7D7D7D',
    width: width - 20 - 20 - 50,
  },
  cancelButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 20,
    height: 60,
    backgroundColor: '#FFFFFF',
    marginBottom: 35,
    borderRadius: 12,
  },
  cancelText: {
    fontFamily: 'System',
    fontSize: 20,
    color: '#007AFF',
    fontWeight: '600',
  },
  actionSheetContainer: {
    // paddingBottom: 40
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'red',
  },
});

// Exports
export default ContactActionSheet;
