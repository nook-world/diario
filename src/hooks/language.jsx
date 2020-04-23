import { useState, useEffect } from "react";
import pt from "../../public/languages/pt.json";
import en from "../../public/languages/en.json";

function useLanguage() {
  const defaultLanguage = "pt";
  const importedLanguages = { pt, en };

  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [language, setLanguage] = useState(importedLanguages[defaultLanguage]);

  useEffect(() => {
    const possibleLanguages = ["pt", "en"];
    let userLanguage = (
      navigator.userLanguage ||
      navigator.language ||
      defaultLanguage
    ).substring(0, 2);

    if (!possibleLanguages.includes(userLanguage)) {
      userLanguage = defaultLanguage;
    }

    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", userLanguage);
    }

    const storageLanguage = localStorage.getItem("language");

    if (storageLanguage) setSelectedLanguage(storageLanguage);
  }, []);

  useEffect(() => {
    let controller, signal;

    async function fetchLanguage() {
      controller = new AbortController();
      signal = controller.signal;

      const languageData = await fetch(
        `/languages/${selectedLanguage}.json?v=6`,
        { signal }
      )
        .then((res) => res.json())
        .catch(() => null);

      if (languageData) {
        setLanguage(languageData);
      }
    }

    fetchLanguage();

    return () => {
      controller && controller.abort();
    };
  }, [selectedLanguage]);

  return [language, setSelectedLanguage];
}

export default useLanguage;
