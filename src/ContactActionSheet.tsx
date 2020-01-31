// Imports: Dependencies
import React, { useState } from 'react';
import { ActionSheetIOS, Button, Dimensions, Platform, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Contact {
  key: number;
  title: string;
  type: 'Email' | 'Phone Number';
  contact: string;
}

interface Props {
  contactsList: Array<Contact>;
  callEmail: (contact: Contact) => any | void;
}

// Component: Contact Action Sheet
const ContactActionSheet = (props: Props) => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState(false);
  const [ selected, selectContact ] = useState(false);

  // React Hooks: Lifecycle Methods

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

  // Render Contact Selectors
  const renderContactSelectors = (props: Props) => {
    try {
      if (props.contactsList.length >= 6) {
        console.warn('Error: Maximum of 6 contacts allowed.');
      }
      else {
        return props.contactsList.map((contact: Contact) => {
          // IF/ELSE FOR EMAIL/PHONE NUMBER???
          return (
            <TouchableOpacity key={contact.key} style={styles.contactSelector} onPress={() => callEmail(contact)}>
              <Icon name="ios-call" size={28} style={styles.icon} color="#323232"></Icon>
              <View>
                <Text style={styles.contactTitle}>{contact.title}</Text>
                <Text style={styles.emailPhone} numberOfLines={1}>{contact.contact}</Text>
              </View>
            </TouchableOpacity>
          );
        });
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  // Call/Email
  const callEmail = (contact: Contact) => {
    try {
      // Check If Email
      if (contact.type === 'Email') {

        // Email Details
        let email = `${contact.contact}`;
        let subject = `${contact.title}`;
        let body = '';
  
        // Send Email
        Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
      }

      // Check If Phone Number
      else if (contact.type === 'Phone Number') {
        // Call Phone Number
        Linking.openURL(`tel:${contact.contact}`);  
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Show Native Action Sheet"
        onPress={showActionSheet}
      />

      <Button
        title="Show Modal"
        onPress={() => toggleModal()}
      />

      <Modal
        isVisible={modalVisible}
        style={styles.modal}
        backdropOpacity={.30}
        // onBackdropPress={() => alert('Fuck')}
      >
        <View style={styles.modalContainer}>
          <View style={styles.contactListContainer}>
            {renderContactSelectors(props)}
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