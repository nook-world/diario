import React from "react";

import Layout from "../components/Layout";

import styles from "../styles/pages/opensource.module.css";

const replaceMarkdownLink = (str) => {
  const regex = /\[([^\]]+)\]\(([^\)]+)\)/gm;
  const subst = `<a target="_blank" rel="noopener" href="$2">$1</a>`;
  return str.replace(regex, subst);
};

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

function Container({ children }) {
  return <section className={styles.container}>{children}</section>;
}

function Page({ language }) {
  return (
    <Layout background={styles.layout}>
      <h1>Open-source e o Futuro do Nook World</h1>

      <Container>
        <article className={styles.news}>
          <p>
            Primeiramente, gostaríamos de agradecer a todos que usaram o nosso
            aplicativo, mesmo que tenha sido por pouco tempo. O Diário nasceu da
            vontade que tínhamos de fazer um aplicativo para outros jogadores,
            assim como nós.
          </p>
          <p>
            A última atualização significativa que publicamos foi a lista de
            músicas. De lá para cá, muitas coisas aconteceram e o
            desenvolvimento do aplicativo acabou sendo suspenso por tempo
            indeterminado. Infelizmente, não podemos mais dedicar o tempo que
            gostaríamos ao projeto, mas também não gostaríamos de abandoná-lo
            completamente.
          </p>
          <p>
            Tivemos uma conversa recentemente e decidimos que a melhor coisa à
            fazer seria abrir o código do Diário. Dessa forma, outras pessoas
            que tenham interesse podem contribuir pro desenvolvimento do
            aplicativo.
          </p>
          <p>
            As informações sobre como contribuir estarão no{" "}
            <a href="https://github.com/nook-world/diario">
              repositório do Diário no Github
            </a>
            , junto com a última versão do código. Se você tiver uma conta no
            Github e quiser contribuir, basta fazer um <i>fork</i> do projeto e
            abrir um <i>pull-request</i>.
          </p>
          <p>
            Agradecemos todo apoio que tivemos até aqui e esperamos que essa
            nova fase do Nook World traga novas idéias e funcionalidades.{" "}
            <i>Yes, yes</i>.
          </p>
          <p className={styles.signature}>Equipe Nook World</p>
        </article>
      </Container>
    </Layout>
  );
}

export default Page;
