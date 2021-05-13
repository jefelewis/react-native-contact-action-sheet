// Imports: Dependencies
import React, { useState } from 'react';
import { Button, SafeAreaView } from 'react-native';

// Imports: Components
import { ContactActionSheet }  from 'react-native-contact-action-sheet';

// Imports: TypeScript Types
import { ContactItem } from './src/types/types';

// App
const App: React.FC = (): JSX.Element => {
  // React Hooks: State
  const [ visible, toggle ] = useState<boolean>(false);

  // Open Action Sheet
  const openActionSheet = (): void => {
    // React Hook: Toggle Modal
    toggle((visible: boolean) => !visible);
  };

  // Contacts
  const contacts: Array<ContactItem> = [
    {
      title: 'Company Headquarters',
      type: 'Phone Number',
      contact: '(555) 555-5555',
    },
    {
      title: 'Retail Store',
      type: 'Phone Number',
      contact: '(777) 777-7777',
    },
    {
      title: 'Retail Store',
      type: 'Message',
      contact: '(777) 777-7777',
    },
    {
      title: 'Retail Store',
      type: 'Email',
      contact: 'hq@company.com',
    },
    {
      title: 'Website',
      type: 'Website',
      contact: 'https://company.com',
    },
  ];

  return (
    <SafeAreaView>
      <Button
        title="Show Modal"
        onPress={() => openActionSheet()}
      />

      <ContactActionSheet
        visible={visible}
        toggle={toggle}
        contactsList={contacts}
      />
    </SafeAreaView>
  );
};

// Exports
export default App;
