import type { GlobalThemeOverrides } from 'naive-ui';

export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#216254', primaryColorHover: '#317662', primaryColorPressed: '#184d40',
    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
  },
  Menu: {
    itemHeight: '32px',
  },

  Layout: { color: '#f1f6f3' },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px' },
    },
  },
};

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    primaryColor: '#70ba9e',
    primaryColorHover: '#36AD6AFF',
    primaryColorPressed: '#0C7A43FF',
    primaryColorSuppl: '#36AD6AFF',
  },

  Notification: {
    color: '#333333',
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px', color: '#1e1e1e' },
    },
  },

  Menu: {
    itemHeight: '32px',
  },

  Layout: {
    color: '#1c1c1c',
    siderColor: '#232323',
    siderBorderColor: 'transparent',
  },

  Card: {
    color: '#232323',
    borderColor: '#282828',
  },

  Table: {
    tdColor: '#232323',
    thColor: '#353535',
  },
};
