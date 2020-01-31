// Imports: Dependencies
import React, { useState } from 'react';
import { Button, SafeAreaView } from 'react-native';

// Imports: Components
import ContactActionSheet from './src/ContactActionSheet';

// React Native App
const App = () => {
  // React Hooks: State
  const [ visible, toggle ] = useState(false);

  // Open Action Sheet
  const openActionSheet = () => {
    try {
      // React Hook: Toggle Modal
      toggle((visible: boolean) => !visible);
    }
    catch (error) {
      console.log(error);
    }
  };

  // Contacts
  const contacts = [
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
      title: 'Company Headquarters',
      type: 'Email',
      contact: 'hq@company.com',
    },
    {
      title: 'Retail Store',
      type: 'Email',
      contact: 'store@company.com',
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
  )
};

// Exports
export default App;
