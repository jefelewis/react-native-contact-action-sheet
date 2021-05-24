export declare type ContactType = 'Phone Number' | 'Message' | 'Email' | 'Website';
export interface ContactItem {
    title: string;
    type: ContactType;
    contact: string;
}
export declare type ContactIcon = 'ios-mail' | 'ios-call' | 'ios-chatbubble' | 'ios-globe';
