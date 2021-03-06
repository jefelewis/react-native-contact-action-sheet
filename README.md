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

**2. Add pod to ios/Podfile:**
```
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

**3. Install Cocoapods:**
```
pod install
```

**4. Run Project:**
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
**Functional Component (Using React Hooks):**

```javascript
// Imports: Dependencies
import React, { useState } from 'react';
import { Button, SafeAreaView } from 'react-native';

// Imports: Components
import { ContactActionSheet }  from 'react-native-contact-action-sheet';

// Functional Component
const FunctionalComponent = () => {
  // React Hooks: State
  const [ visible, toggle ] = useState(false);

  // Open Action Sheet
  const openActionSheet = () => {
    // React Hook: Toggle Modal
    toggle((visible: boolean) => !visible);
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
  )
};

// Exports
export default App;
```

**Class Component (Using State):**
```javascript
// Imports: Dependencies
import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { ContactActionSheet }  from 'react-native-contact-action-sheet';

// Screen: Class Component
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }
  }

  // Open Action Sheet
  openActionSheet = () => {
    // Set State
    this.setState({
      visible: !this.state.visible,
    })
  };

  render() {
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
          onPress={this.openActionSheet}
        />

        <ContactActionSheet
          visible={this.state.visible}
          toggle={this.openActionSheet}
          contactsList={contacts}
        />
      </SafeAreaView>
    )
  }
}

// Exports
export default ClassComponent;
```


## Changelog

### [0.1.3] - 8/9/2020

***Added***

- Added Dark Mode support. Please upgrade to React Native 0.62 for this to work.

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

- Fixed React Native Vector Icons link issue.

### [0.1.0] - 2/3/2020

***Changed***

- Fixed React Native Vector Icons podfile issue.

### [0.0.6] - 1/31/2020

***Changed***

- Fixed maximum contacts issue.
- Fixed outDir/dist issue.

### [0.0.5] - 1/31/2020

***Changed***

- Fixed README example code.

### [0.0.3] - 1/31/2020

***Added***

- Added support for Message.

***Changed***

- Fixed toggle issue.

### [0.0.2] - 1/30/2020

***Added***

- Added Android Support.
- Added iPhone X/11 Support.
- Added screenshots.

***Changed***

- Styling changes.
