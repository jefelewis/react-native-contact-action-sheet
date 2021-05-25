// Imports: Dependencies
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Imports: TypeScript Types
import { ContactItem, ContactIcon } from '../../src/types/types';

// TypeScript Type: Props
interface Props {
  toggle: () => void,
  modalVisible: boolean,
  contactsList: Array<ContactItem>,
  darkMode?: boolean,
};

// Component: Contact Action Sheet
const ContactActionSheet: React.FC<Props> = (props): JSX.Element => {
  // Render Contact Selectors
  const renderContactSelectors = () => {
    // Check If Contacts List Is Less Than 6 Contact Items
    if (props.contactsList.length > 6) {
      // Error
      throw new Error('React-Native-Contact-Action-Sheet Error: Maximum of 6 contacts allowed.');
    }
    else {
      // Map Contacts List To Contact Selector
      return props.contactsList.map((contact: ContactItem, i: number) => {
        // Render Single Contact List
        if (props.contactsList.length === 1) {
          return (
            <TouchableOpacity key={i} style={props.darkMode ? styles.contactSelectorSingleDark : styles.contactSelectorSingleLight} onPress={() => callEmail(contact)}>
              <Icon name={String(renderIcon(contact))} size={27} style={props.darkMode ? styles.iconDark : styles.iconLight} color="#323232" />

              <View>
                <Text style={props.darkMode ? styles.contactTitleDark : styles.contactTitleLight}>{contact.title}</Text>
                <Text style={props.darkMode ? styles.emailPhoneTextDark : styles.emailPhoneTextLight} numberOfLines={1}>{contact.contact}</Text>
              </View>
            </TouchableOpacity>
          );
        };
        // Render First Index
        if (props.contactsList.indexOf(contact) === 0) {
          return (
            <TouchableOpacity key={i} style={props.darkMode ? styles.contactSelectorFirstDark : styles.contactSelectorFirstLight} onPress={() => callEmail(contact)}>
              <Icon name={String(renderIcon(contact))} size={27} style={props.darkMode ? styles.iconDark : styles.iconLight} color="#323232" />

              <View>
                <Text style={props.darkMode ? styles.contactTitleDark : styles.contactTitleLight}>{contact.title}</Text>
                <Text style={props.darkMode ? styles.emailPhoneTextDark : styles.emailPhoneTextLight} numberOfLines={1}>{contact.contact}</Text>
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
            <TouchableOpacity key={i} style={props.darkMode ? styles.contactSelectorDark : styles.contactSelectorLight} onPress={() => callEmail(contact)}>
              <Icon name={String(renderIcon(contact))} size={27} style={props.darkMode ? styles.iconDark : styles.iconLight} color="#323232" />

              <View>
                <Text style={props.darkMode ? styles.contactTitleDark : styles.contactTitleLight}>{contact.title}</Text>
                <Text style={props.darkMode ? styles.emailPhoneTextDark : styles.emailPhoneTextLight} numberOfLines={1}>{contact.contact}</Text>
              </View>
            </TouchableOpacity>
          );
        };

        // Render Last Index
        if (props.contactsList.indexOf(contact) === props.contactsList.length - 1) {
          return (
            <TouchableOpacity key={i} style={props.darkMode ? styles.contactSelectorLastDark : styles.contactSelectorLastLight} onPress={() => callEmail(contact)}>
              <Icon name={String(renderIcon(contact))} size={27} style={props.darkMode ? styles.iconDark : styles.iconLight} color="#323232" />

              <View>
                <Text style={props.darkMode ? styles.contactTitleDark : styles.contactTitleLight}>{contact.title}</Text>
                <Text style={props.darkMode ? styles.emailPhoneTextDark : styles.emailPhoneTextLight} numberOfLines={1}>{contact.contact}</Text>
              </View>
            </TouchableOpacity>
          );
        }
      });
    }
  };

  // Format Phone Number
  const formatPhoneNumber = (phoneNumber: string): string | undefined => {
    // Remove Spaces
    phoneNumber = phoneNumber.replace(/ /g, '');

    // Remove Special Characters
    phoneNumber = phoneNumber.replace(/[^a-zA-Z0-9]/g, '');

    // Add Area Code 1
    phoneNumber = '1'.concat('', phoneNumber);

    // Check Phone Number Length
    if (phoneNumber.length > 11) {
      console.warn('React-Native-Contact-Action-Sheet Error: Phone Number is too long.');
    }
    else if (phoneNumber.length < 11) {
      console.warn('React-Native-Contact-Action-Sheet Error: Phone Number is too short.');
    }
    else {
      return phoneNumber;
    }
  };

  // Call/Email
  const callEmail = (contact: ContactItem): void => {
    // Check Type: Email
    if (contact.type === 'Email') {
      // Email Details
      const email: string = `${contact.contact}`;
      const subject: string = `${contact.title}`;
      const body: string = '';

      // Send Email
      Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
    }
    // Check Type: Phone Number
    else if (contact.type === 'Phone Number') {
      // Call Phone Number
      Linking.openURL(`tel:${formatPhoneNumber(contact.contact)}`);
    }
    // Check Type: Message
    else if (contact.type === 'Message') {
      // Call Phone Number
      Linking.openURL(`sms:${formatPhoneNumber(contact.contact)}`);
    }
    // Check Type: Website
    else if (contact.type === 'Website') {
      // Open Website
      Linking.openURL(contact.contact);
    }

    // Toggle Modal
    props.toggle();
  };

  // Render Icon
  const renderIcon = (contact: ContactItem): ContactIcon | undefined => {
    // Type: Email
    if (contact.type === 'Email') {
      return 'ios-mail';
    }
    // Type: Phone Number
    else if (contact.type === 'Phone Number') {
      return 'ios-call';
    }
    // Type: Message
    else if (contact.type === 'Message') {
      return 'ios-chatbubble';
    }
    // Type: Website
    else if (contact.type === 'Website') {
      return 'ios-globe';
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={props.modalVisible}
        style={styles.modal}
        backdropOpacity={.30}
      >
        <View style={styles.modalContainer}>
          <View style={styles.contactListContainer}>
            <>{renderContactSelectors()}</>
          </View>

          <TouchableOpacity onPress={() => props.toggle()} style={props.darkMode ? styles.cancelButtonContainerDark : styles.cancelButtonContainerLight}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

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
  contactSelectorSingleLight: {
    width: width - 20,
    height: 65,
    backgroundColor: '#383838',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contactSelectorSingleDark: {
    width: width - 20,
    height: 65,
    backgroundColor: '#383838',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contactSelectorFirstLight: {
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
  contactSelectorFirstDark: {
    width: width - 20,
    height: 65,
    backgroundColor: '#383838',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactSelectorLight: {
    width: width - 20,
    height: 65,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contactSelectorDark: {
    width: width - 20,
    height: 65,
    backgroundColor: '#383838',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contactSelectorLastLight: {
    width: width - 20,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactSelectorLastDark: {
    width: width - 20,
    height: 65,
    backgroundColor: '#383838',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLight: {
    marginLeft: 25,
    marginRight: 25,
    color: '#8A8A8E',
  },
  iconDark: {
    marginLeft: 25,
    marginRight: 25,
    color: '#8D8D93',
  },
  contactTitleLight: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '500',
    color: '#323232',
    letterSpacing: -0.41,
    marginBottom: 4,
    width: width - 20 - 20 - 60,
  },
  contactTitleDark: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: -0.41,
    marginBottom: 4,
    width: width - 20 - 20 - 60,
  },
  emailPhoneTextLight: {
    fontFamily: 'System',
    fontSize: 15,
    fontWeight: '400',
    color: '#8A8A8E',
    letterSpacing: -0.24,
    width: width - 20 - 20 - 50,
  },
  emailPhoneTextDark: {
    fontFamily: 'System',
    fontSize: 15,
    fontWeight: '400',
    color: '#8D8D93',
    letterSpacing: -0.24,
    width: width - 20 - 20 - 50,
  },
  cancelButtonContainerLight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 20,
    height: 60,
    backgroundColor: '#FFFFFF',
    ...ifIphoneX({
      marginBottom: 35,
    },
    {
      marginBottom: 10,
    }),
    borderRadius: 12,
  },
  cancelButtonContainerDark: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 20,
    height: 60,
    backgroundColor: '#383838',
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
    fontSize: 17,
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
