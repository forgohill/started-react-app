import React from "react";

export const TranslationContext = React.createContext();


export const translations = {
  en: {
    welcomePhrase: 'Standard website',
  },
  ru: {
    welcomePhrase: 'Стандартный веб-сайт!',
  },
};
