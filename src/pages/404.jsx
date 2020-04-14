import React from "react";

import Layout from "../components/Layout";

function Page() {
  return (
    <Layout>
      <h1>Error 404</h1>
      <p style={{ margin: "auto", fontSize: "2em" }}>
        <b>Ops, page not found :(</b>
      </p>
    </Layout>
  );
}

export default Page;
