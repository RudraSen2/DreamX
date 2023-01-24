/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const features = [
  {
    title: 'We experimernt',
    description: <>We try new platforms according to users order.</>,
  },
  {
    title: "What's next?",
    description: <>DreamX Will make blog</>,
  },
  {
    title: 'How to approach?',
    description: <>Please visit our contact page for this information.</>,
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', 'feature')}>
      {imgUrl && (
        <div className="text--center">
          <img className="featureImage" src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;
  return (
    <Layout
      title={`Home`}
      description="Getting the right legal advice is important because it helps you know your rights and gives you a better chance for a positive outcome.">
      <header className={clsx('hero hero--primary', 'heroBanner')}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons">
            <Link
              className={clsx(
                'button button--primary button--secondary button--lg',
              )}
              to="/products">
              Get our Products!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className="features">
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
