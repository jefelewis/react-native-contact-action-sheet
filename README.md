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
    try {
      // Set State
      this.setState({
        visible: !this.state.visible,
      })
    }
    catch (error) {
      console.log(error);
    }
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

### [0.1.1] - 2/4/2020

***Added***

- Adding `formatPhoneNumber` to convert phone number to `15555555555` format.

***Changed***

- Fixing React Native Vector Icons link issue.


### [0.1.0] - 2/3/2020

***Changed***

- Fixing React Native Vector Icons podfile issue.

### [0.0.6] - 1/31/2020

***Changed***

- Fixing maximum contacts issue.
- Fixing outDir/dist issue.

### [0.0.5] - 1/31/2020

***Changed***

- Fixing README example code.

### [0.0.3] - 1/31/2020

***Added***

- Adding support for Message.

***Changed***

- Fixing toggle issue.


### [0.0.2] - 1/30/2020

***Added***

- Adding Android Support.
- Adding iPhone X/11 Support.
- Adding screenshots.

***Changed***

- Styling changes.
