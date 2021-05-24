import React from 'react';
import { ContactItem } from '../../src/types/types';
interface Props {
    toggle: () => void;
    modalVisible: boolean;
    contactsList: Array<ContactItem>;
    darkMode?: boolean;
}
declare const ContactActionSheet: React.FC<Props>;
export default ContactActionSheet;
