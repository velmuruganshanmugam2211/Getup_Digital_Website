export const BRAND_INFO = {
  name: 'GETUP DIGITAL SOLUTION',
  tagline: 'Your Growing Partner',
  hashtag: '#yourgrowingpartner',
  email: 'getupdigitalsolution@gmail.com',
  phone: '8778858467',
  phoneFormatted: '+91 87788 58467',
  whatsapp: '918778858467',
  location: 'Erode, Tamil Nadu, India',
  description: 'GETUP Digital is a creative digital marketing agency dedicated to helping businesses grow their online presence, attract more customers, and achieve measurable results through innovative marketing strategies.'
};

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Clients', href: '/clients' },
  { name: 'Works', href: '/works' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

export const GOOGLE_SHEETS_CONFIG = {
  spreadsheetUrl: import.meta.env.VITE_GOOGLE_SHEETS_URL || 'https://docs.google.com/spreadsheets/d/1I6bKCpc9EDHiuCuCA02s30m6e3y3b6hXdB6WHsjjt7Y/edit?usp=sharing',
  spreadsheetId: import.meta.env.VITE_GOOGLE_SHEETS_ID || '1I6bKCpc9EDHiuCuCA02s30m6e3y3b6hXdB6WHsjjt7Y',
  scriptUrl: import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbx7quZ9ivXHxEWd64HC2AswvfuNqS1Z4AhZU6x-kdvoepmm8hZGQV5-boFxwXml5GZr/exec',
};

