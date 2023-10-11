import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next"; // Import initReactI18next

import enTranslation from "./locales/en/englishTranslation.json";
import faTranslation from "./locales/fa/farsiTranslation.json";

import App from "./App";
import "./index.css";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fa: {
      translation: faTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
