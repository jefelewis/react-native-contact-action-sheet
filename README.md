# React Native Contact Action Sheet

[![npm version](https://badge.fury.io/js/react-native-contact-action-sheet.svg)](https://badge.fury.io/js/react-native-contact-action-sheet)
[![npm downloads](https://img.shields.io/npm/dm/react-native-contact-action-sheet.svg)](https://www.npmjs.com/package/react-native-contact-action-sheet)

*  [Features](#features)
*  [Built With](#built-with)
*  [Pending Items](#pending-items)
*  [Getting Started](#getting-started)
*  [Example Code](#example-code)
*  [Screenshot (iOS)](#screenshot-ios)
*  [Screenshot (Android)](#screenshot-android)
*  [Building & Publishing](#building-&-publishing)
*  [Changelog](#changelog)

## Features
*  ✅ iOS/Android
*  ✅ Dark Mode
*  ✅ Built with TypeScript
*  ✅ Built with React Hooks

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

<!-- **2. Add pod to ios/Podfile:**
```
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
``` -->

**2. Install Cocoapods:**
```
pod install
```

**3. Run Project:**

**Android**
```javascript
react-native run-android
```

**iOS**
```javascript
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
```typescript
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
    // Set State
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
        darkMode={false}
      />
    </SafeAreaView>
  );
};

// Exports
export default App;
```

## Building & Publishing

**Build**
```javascript
npm run build
```

**Publish**
```javascript
npm publish
```


## Changelog

### [0.1.6] - 5/16/2021

***Changed***

- Fixed missing `README` issue.

### [0.1.5] - 5/16/2021

***Added***

- Added `darkMode` prop.

***Changed***

- Changed `react-native-iphone-x-helper` to `peerDependency`.
- Changed `react-native-modal` to `peerDependency`.
- Changed `react-native-vector-icons` to `peerDependency`.
- Updated `README` Getting Started for `iOS` pods.
- Updated `README` Getting Started for `Android` dependencies.

***Removed***

- Removed `Appearance` `react-native` prop for better dark mode support.

### [0.1.4] - 5/13/2021

***Added***

- Added TypeScript `types` folder.

### [0.1.3] - 8/9/2020

***Added***

- Added Dark Mode support. Please upgrade to `React Native 0.62` for this to work.

***Changed***

- Updated `react` dependency.
- Updated `react-native` dependency.
- Updated `react-native-vector-icons` dependency.
- Updated `react-native-modal` dependency.

***Removed***

- Removed `react-native-dark-mode` dependency (Deprecated).

### [0.1.2] - 4/2/2020

***Added***

- Added Website.

### [0.1.1] - 2/4/2020

***Added***

- Added `formatPhoneNumber` to convert phone number to `15555555555` format.

***Changed***

- Fixed `react-native-vector-icons` link issue.

### [0.1.0] - 2/3/2020

***Changed***

- Fixed `react-native-vector-icons` `podfile` issue.

### [0.0.6] - 1/31/2020

***Changed***

- Fixed maximum contacts issue.
- Fixed `outDir/dist` issue.

### [0.0.5] - 1/31/2020

***Changed***

- Fixed `README` example code.

### [0.0.3] - 1/31/2020

***Added***

- Added support for Message.

***Changed***

- Fixed `toggle` issue.

### [0.0.2] - 1/30/2020

***Added***

- Added `Android` Support.
- Added iPhone X/11 Support.
- Added screenshots.

***Changed***

- Styling changes.
