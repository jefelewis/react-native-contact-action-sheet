
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
      title: 'Building Department',
      type: 'Phone Number',
      contact: '(555) 555-5555',
    },
    {
      title: 'City Clerk',
      type: 'Phone Number',
      contact: '(777) 777-7777',
    },
    {
      title: 'Building Department',
      type: 'Email',
      contact: 'building@city.com',
    },
    {
      title: 'City Clerk',
      type: 'Email',
      contact: 'cityclerk@city.com',
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
