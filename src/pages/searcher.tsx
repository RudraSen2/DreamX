import React from 'react';
import Layout from '@theme/Layout';

export default function Searcher() {
  return (
    <Layout title={`Searcher`} description="Searcher">
      <iframe
        src="/html/searcher.html#gsc.tab=0"
        title="Searcher"
        height="700px"
        width="100%"
      />
    </Layout>
  );
}
