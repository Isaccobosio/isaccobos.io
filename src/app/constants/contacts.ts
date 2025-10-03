export type ContactType = 'email' | 'linkedin' | 'github';

export interface ContactInfo {
  href: string;
  iconType: ContactType;
  label: string;
  description: string;
  isExternal?: boolean;
}

export const CONTACT_INFO: Record<ContactType, ContactInfo> = {
  email: {
    href: 'mailto:isacco.bosio@gmail.com',
    iconType: 'email',
    label: 'Email',
    description: 'isacco.bosio@gmail.com',
    isExternal: false,
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/isacco-bosio/',
    iconType: 'linkedin',
    label: 'LinkedIn',
    description: 'Connect with me',
    isExternal: true,
  },
  github: {
    href: 'https://github.com/Isaccobosio',
    iconType: 'github',
    label: 'GitHub',
    description: 'View my code',
    isExternal: true,
  },
};