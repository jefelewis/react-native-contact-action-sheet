// Imports: Dependencies
import React, { useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Contact {
  title: string;
  type: 'Email' | 'Phone Number' | string;
  contact: string;
}

interface Props {
  contactsList: Array<Contact>;
  callEmail?: (contact: Contact) => any;
}

// Component: Contact Action Sheet
const ContactActionSheet = (props: Props) => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState(false);

  // Toggle Modal
  const toggleModal = () => {
    try {
      // React Hook: Toggle Modal
      toggle((modalVisible: boolean) => !modalVisible);
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
        // Map Contacts List To Contact Selector
        return props.contactsList.map((contact: Contact, index: number) => {
          // Render Single Contact List
          if (props.contactsList.length === 1) {
            return (
              <TouchableOpacity key={index} style={styles.contactSelectorSingle} onPress={() => callEmail(contact)}>
                <Icon name={contact.type === 'Email' ? 'ios-mail': 'ios-call'} size={28} style={styles.icon} color="#323232"></Icon>
                <View>
                  <Text style={styles.contactTitle}>{contact.title}</Text>
                  <Text style={styles.emailPhone} numberOfLines={1}>{contact.contact}</Text>
                </View>
              </TouchableOpacity>
            );
          };

          // Render First Index
          if (props.contactsList.indexOf(contact) === 0) {
            return (
              <TouchableOpacity key={index} style={styles.contactSelectorFirst} onPress={() => callEmail(contact)}>
                <Icon name={contact.type === 'Email' ? 'ios-mail': 'ios-call'} size={28} style={styles.icon} color="#323232"></Icon>
                <View>
                  <Text style={styles.contactTitle}>{contact.title}</Text>
                  <Text style={styles.emailPhone} numberOfLines={1}>{contact.contact}</Text>
                </View>
              </TouchableOpacity>
            );
          };

          // Render Middle Indexes
          if (
            props.contactsList.indexOf(contact) >= 1
            && props.contactsList.indexOf(contact) !== props.contactsList.length - 1
            && props.contactsList.length >= 3
          ) {
            return (
              <TouchableOpacity key={index} style={styles.contactSelector} onPress={() => callEmail(contact)}>
                <Icon name={contact.type === 'Email' ? 'ios-mail': 'ios-call'} size={28} style={styles.icon} color="#323232"></Icon>
                <View>
                  <Text style={styles.contactTitle}>{contact.title}</Text>
                  <Text style={styles.emailPhone} numberOfLines={1}>{contact.contact}</Text>
                </View>
              </TouchableOpacity>
            );
          };

          // Render Last Index
          if (props.contactsList.indexOf(contact) === props.contactsList.length - 1) {
            return (
              <TouchableOpacity key={index} style={styles.contactSelectorLast} onPress={() => callEmail(contact)}>
                <Icon name={contact.type === 'Email' ? 'ios-mail': 'ios-call'} size={28} style={styles.icon} color="#323232"></Icon>
                <View>
                  <Text style={styles.contactTitle}>{contact.title}</Text>
                  <Text style={styles.emailPhone} numberOfLines={1}>{contact.contact}</Text>
                </View>
              </TouchableOpacity>
            );
          }
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

      // Toggle Modal
      toggleModal();
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
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
    width: width,
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
  contactSelectorSingle: {
    width: width - 20,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactSelectorFirst: {
    width: width - 20,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactSelector: {
    width: width - 20,
    height: 65,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contactSelectorLast: {
    width: width - 20,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 25,
    marginRight: 25,
  },
  contactTitle: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 4,
    color: '#323232',
    width: width - 20 - 20 - 60,
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
    // backgroundColor: isDarkMode ? '#000' : '#FFFFFF',
    backgroundColor: '#FFFFFF',
    ...ifIphoneX({
      marginBottom: 35,
    },
    {
      marginBottom: 10,
    }),
    borderRadius: 12,
  },
  cancelText: {
    fontFamily: 'System',
    fontSize: 20,
    color: '#007AFF',
    fontWeight: '600',
  },
  actionSheetContainer: {
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'red',
  },
});

// Exports
export default ContactActionSheet;
