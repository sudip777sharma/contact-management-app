export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
};

export type darkModeType = boolean;

export type appState = {
  contacts: Contact[];
  darkMode: darkModeType;
};

export type toggleViewType = {
  id: number;
  toggleView: boolean;
};

export type ContactDetailPropType = {
  contact: Contact;
  toggleViewMap: Map<number, boolean>;
  handleToggleView: (id: number) => void;
};

export type EditContactDetailPropType = {
  id: number;
};
