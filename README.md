# React Native Contact Action Sheet

[![npm version](https://badge.fury.io/js/react-native-contact-action-sheet.svg)](https://badge.fury.io/js/react-native-contact-action-sheet)
[![npm downloads](https://img.shields.io/npm/dm/react-native-contact-action-sheet.svg)](https://www.npmjs.com/package/react-native-contact-action-sheet)

*  [Built With](#built-with)
*  [Pending Items](#pending-items)
*  [Getting Started](#getting-started)
*  [Example Code](#example-code)
*  [Screenshot (iOS)](#screenshot-ios)
*  [Screenshot (Android)](#screenshot-android)
*  [Changelog](#changelog)

## Built With
* [TypeScript](https://github.com/microsoft/TypeScript) - Programming Language
* [React Native](https://facebook.github.io/react-native/) - Mobile (iOS/Android) Framework
* [React Native Modal](https://github.com/react-native-community/react-native-modal) - Modal
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Functional Component State/Lifecycle Methods

## Pending Items
- [ ] 

## Getting Started
**Note:** Maximum of 6 Phone Numbers and Emails Total allowed.

**1. Install Package:**
```
npm i react-native-contact-action-sheet
```

**2. Run Project:**
```
react-native run-ios
```


## Screenshot (iOS)
<div align="center">
  <img src="/screenshots/ios/iosActionSheet.gif" width="40%" height="40%" />
</div>

## Screenshot (Android)
<div align="center">
  <img src="/screenshots/android/androidActionSheet.gif" width="40%" height="40%" />
</div>


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
    <SafeAreaView style={{ display: 'flex', flex: 1 }}>
      <ContactActionSheet contactsList={contacts} />
    </SafeAreaView>
  )
};
```


## Changelog

### [0.0.2] - 1/30/2020

***Added***

- Adding Android Support.
- Adding iPhone X/11 Support.
- Adding screenshots.

***Changed***

- Styling changes.
