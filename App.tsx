
// Imports: Dependencies
import React from 'react';
import { SafeAreaView } from 'react-native';

// Imports: Components
import ContactActionSheet from './src/ContactActionSheet';

// React Native App
const App = () => {

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
      <ContactActionSheet contactsList={contacts} />
    </SafeAreaView>
  )
};

// Exports
export default App;
