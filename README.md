# React Native Contact Action Sheet

[![npm version](https://badge.fury.io/js/react-native-contact-action-sheet.svg)](https://badge.fury.io/js/react-native-contact-action-sheet)
[![npm downloads](https://img.shields.io/npm/dm/react-native-contact-action-sheet.svg)](https://www.npmjs.com/package/react-native-contact-action-sheet)

*  [Built With](#built-with)
*  [Pending Items](#pending-items)
*  [Getting Started](#getting-started)
*  [Example Code](#example-code)
*  [Changelog](#changelog)

## Built With
* [TypeScript](https://github.com/microsoft/TypeScript) - Programming Language
* [React Native](https://facebook.github.io/react-native/) - Mobile (iOS/Android) Framework
* [React Native Modal](https://github.com/react-native-community/react-native-modal) - Modal
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Functional Component State/Lifecycle Methods

## Pending Items
- [ ] 

## Getting Started
**1. Install Package:**
```
npm i react-native-contact-action-sheet
```

**3. Run Project:**
```
react-native run-ios
```


## Example Code
```javascript
// Imports: Dependencies
import React from 'react';
import { SafeAreaView } from 'react-native';

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
    <SafeAreaView style={{ display: 'flex', flex: 1 }}>
      <ContactActionSheet contactsList={contacts} />
    </SafeAreaView>
  )
};
```


## Changelog

### [0.0.1] - 1/29/2020

***Added***

- 

***Changed***

- 