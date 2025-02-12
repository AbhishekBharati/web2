import React from "react";
import './App.css'
import { useTranslation } from 'react-i18next'



const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  // console.log("Current language:", i18n.language);
  // console.log("Available languages:", i18n.languages);
  // console.log("Translation (welcome):", t("welcome"));

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("greeting", { name: "Anshu" })}</p>
      <button onClick={() => i18n.changeLanguage("fr")}>French</button>

      <button onClick={() => i18n.changeLanguage("en")}>English</button>
    </div>
  )
}


export default App
