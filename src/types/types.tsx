// TypeScript Type: Contact Type
export type ContactType = 'Phone Number' | 'Message' | 'Email' | 'Website';

// TypeScript Type: Contact Item
export interface ContactItem {
    title: string,
    type: ContactType,
    contact: string,
};

// TypeScript Type: Contact Icon
export type ContactIcon = 'ios-mail' | 'ios-call' | 'ios-chatbubble' | 'ios-globe';
