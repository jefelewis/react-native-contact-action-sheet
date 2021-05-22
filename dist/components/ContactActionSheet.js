"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const react_native_modal_1 = __importDefault(require("react-native-modal"));
const react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
const Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
Ionicons_1.default.loadFont();
// Screen Dimensions
const { height, width } = react_native_1.Dimensions.get('window');
;
// Component: Contact Action Sheet
const ContactActionSheet = (props) => {
    // Render Contact Selectors
    const renderContactSelectors = () => {
        // Check If Contacts List Is Less Than 6 Contact Items
        if (props.contactsList.length > 6) {
            // Error
            throw new Error('React-Native-Contact-Action-Sheet Error: Maximum of 6 contacts allowed.');
        }
        else {
            // Map Contacts List To Contact Selector
            return props.contactsList.map((contact, i) => {
                // Render Single Contact List
                if (props.contactsList.length === 1) {
                    return (jsx_runtime_1.jsxs(react_native_1.TouchableOpacity, Object.assign({ style: props.darkMode ? styles.contactSelectorSingleDark : styles.contactSelectorSingleLight, onPress: () => callEmail(contact) }, { children: [jsx_runtime_1.jsx(Ionicons_1.default, { name: String(renderIcon(contact)), size: 27, style: props.darkMode ? styles.iconDark : styles.iconLight, color: "#323232" }, void 0),
                            jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: props.darkMode ? styles.contactTitleDark : styles.contactTitleLight }, { children: contact.title }), void 0),
                                    jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: props.darkMode ? styles.emailPhoneTextDark : styles.emailPhoneTextLight, numberOfLines: 1 }, { children: contact.contact }), void 0)] }, void 0)] }), i));
                }
                ;
                // Render First Index
                if (props.contactsList.indexOf(contact) === 0) {
                    return (jsx_runtime_1.jsxs(react_native_1.TouchableOpacity, Object.assign({ style: props.darkMode ? styles.contactSelectorFirstDark : styles.contactSelectorFirstLight, onPress: () => callEmail(contact) }, { children: [jsx_runtime_1.jsx(Ionicons_1.default, { name: String(renderIcon(contact)), size: 27, style: props.darkMode ? styles.iconDark : styles.iconLight, color: "#323232" }, void 0),
                            jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: props.darkMode ? styles.contactTitleDark : styles.contactTitleLight }, { children: contact.title }), void 0),
                                    jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: props.darkMode ? styles.emailPhoneTextDark : styles.emailPhoneTextLight, numberOfLines: 1 }, { children: contact.contact }), void 0)] }, void 0)] }), i));
                }
                ;
                // Render Middle Indexes
                if (props.contactsList.indexOf(contact) >= 1
                    && props.contactsList.indexOf(contact) !== props.contactsList.length - 1
                    && props.contactsList.length >= 3) {
                    return (jsx_runtime_1.jsxs(react_native_1.TouchableOpacity, Object.assign({ style: props.darkMode ? styles.contactSelectorDark : styles.contactSelectorLight, onPress: () => callEmail(contact) }, { children: [jsx_runtime_1.jsx(Ionicons_1.default, { name: String(renderIcon(contact)), size: 27, style: props.darkMode ? styles.iconDark : styles.iconLight, color: "#323232" }, void 0),
                            jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: props.darkMode ? styles.contactTitleDark : styles.contactTitleLight }, { children: contact.title }), void 0),
                                    jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: props.darkMode ? styles.emailPhoneTextDark : styles.emailPhoneTextLight, numberOfLines: 1 }, { children: contact.contact }), void 0)] }, void 0)] }), i));
                }
                ;
                // Render Last Index
                if (props.contactsList.indexOf(contact) === props.contactsList.length - 1) {
                    return (jsx_runtime_1.jsxs(react_native_1.TouchableOpacity, Object.assign({ style: props.darkMode ? styles.contactSelectorLastDark : styles.contactSelectorLastLight, onPress: () => callEmail(contact) }, { children: [jsx_runtime_1.jsx(Ionicons_1.default, { name: String(renderIcon(contact)), size: 27, style: props.darkMode ? styles.iconDark : styles.iconLight, color: "#323232" }, void 0),
                            jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: props.darkMode ? styles.contactTitleDark : styles.contactTitleLight }, { children: contact.title }), void 0),
                                    jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: props.darkMode ? styles.emailPhoneTextDark : styles.emailPhoneTextLight, numberOfLines: 1 }, { children: contact.contact }), void 0)] }, void 0)] }), i));
                }
            });
        }
    };
    // Format Phone Number
    const formatPhoneNumber = (phoneNumber) => {
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
    const callEmail = (contact) => {
        // Check Type: Email
        if (contact.type === 'Email') {
            // Email Details
            const email = `${contact.contact}`;
            const subject = `${contact.title}`;
            const body = '';
            // Send Email
            react_native_1.Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
        }
        // Check Type: Phone Number
        else if (contact.type === 'Phone Number') {
            // Call Phone Number
            react_native_1.Linking.openURL(`tel:${formatPhoneNumber(contact.contact)}`);
        }
        // Check Type: Message
        else if (contact.type === 'Message') {
            // Call Phone Number
            react_native_1.Linking.openURL(`sms:${formatPhoneNumber(contact.contact)}`);
        }
        // Check Type: Website
        else if (contact.type === 'Website') {
            // Open Website
            react_native_1.Linking.openURL(contact.contact);
        }
        // Toggle Modal
        props.toggle();
    };
    // Render Icon
    const renderIcon = (contact) => {
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
    return (jsx_runtime_1.jsx(react_native_1.View, Object.assign({ style: styles.container }, { children: jsx_runtime_1.jsx(react_native_modal_1.default, Object.assign({ isVisible: props.modalVisible, style: styles.modal, backdropOpacity: .30 }, { children: jsx_runtime_1.jsxs(react_native_1.View, Object.assign({ style: styles.modalContainer }, { children: [jsx_runtime_1.jsx(react_native_1.View, Object.assign({ style: styles.contactListContainer }, { children: jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: renderContactSelectors() }, void 0) }), void 0),
                    jsx_runtime_1.jsx(react_native_1.TouchableOpacity, Object.assign({ onPress: () => props.toggle(), style: props.darkMode ? styles.cancelButtonContainerDark : styles.cancelButtonContainerLight }, { children: jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: styles.cancelText }, { children: "Cancel" }), void 0) }), void 0)] }), void 0) }), void 0) }), void 0));
};
// Styles
const styles = react_native_1.StyleSheet.create({
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
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
    },
    contactSelectorSingleDark: {
        width: width - 20,
        height: 65,
        backgroundColor: '#383838',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
    },
    contactSelectorFirstLight: {
        width: width - 20,
        height: 65,
        backgroundColor: '#FFFFFF',
        borderColor: '#7D7D7D',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
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
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
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
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
    },
    contactSelectorDark: {
        width: width - 20,
        height: 65,
        backgroundColor: '#383838',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#7D7D7D',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
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
        ...react_native_iphone_x_helper_1.ifIphoneX({
            marginBottom: 35,
        }, {
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
        ...react_native_iphone_x_helper_1.ifIphoneX({
            marginBottom: 35,
        }, {
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
exports.default = ContactActionSheet;
