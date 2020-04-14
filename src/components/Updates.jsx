import React from "react";
import Link from "next/link";

import ArrowLeft from './icons/ArrowLeft';

import styles from "../styles/components/Updates.module.css";

const replaceMarkdownLink = (str) => {
  const regex = /\[([^\]]+)\]\(([^\)]+)\)/gm;
  const subst = `<a href="$2">$1</a>`;
  return str.replace(regex, subst);
};

function NoUpdates({ language }) {
  return <h4>{language.noUpdatesCopy}</h4>;
}

function Container({ children, language }) {
  return (
    <section className={styles.updatesContainer}>
      <p>
        <Link href="/settings">
          <a className="button">
            <ArrowLeft />
            {language.backToSettings}
          </a>
        </Link>
      </p>
      {children}
    </section>
  );
}

function UpdateItem({ update, locale }) {
  return (
    <article className={styles.updateItem}>
      <small>
        {new Date(update.date).toLocaleDateString(locale || "pt-BR")}
      </small>
      <h5>{update.title}</h5>
      <p
        dangerouslySetInnerHTML={{
          __html: replaceMarkdownLink(update.message),
        }}
      ></p>
    </article>
  );
}

function Updates({ language, setSelectedLanguage, updates }) {
  const currentLanguageUpdates = updates[language.selectedLanguage] || [];
  if (currentLanguageUpdates.length < 1) {
    return (
      <Container language={language}>
        <NoUpdates language={language} />
      </Container>
    );
  }
  return (
    <Container language={language}>
      {currentLanguageUpdates.map((updateItem, key) => (
        <UpdateItem key={key} update={updateItem} locale={language.locale} />
      ))}
    </Container>
  );
}

export default Updates;
