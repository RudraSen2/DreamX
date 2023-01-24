/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DreamX',
  tagline:
    'We create apps, games and websites. Customer can also request to create one.',
  url: 'https://multiseven.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/multiseven-logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MultiSeven-HQ', // Usually your GitHub org/user name.
  projectName: 'MultiSeven-Site', // Usually your repo name.

  scripts: [
    'https://kit.fontawesome.com/307bcbc229.js',
    {
      src: 'https://cse.google.com/cse.js?cx=06b829f8aeeb1a6e6',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MultiSeven-HQ/MultiSeven-Site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MultiSeven-HQ/MultiSeven-Site/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'DreamX Logo',
          src: '/img/multiseven-logo.png',
          srcDark: '/img/multiseven-logo.png',
          href: '/',
        },
        items: [
          {to: '/docs', label: 'Documentation', position: 'left'},
          {to: '/products', label: 'Products', position: 'left'},
          {to: '/pricings', label: 'Pricings', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},

          // Please keep GitHub link to the right for consistency.
          // {
          //   href: 'https://github.com/MultiSeven-HQ/',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'DreamX Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/multiseven-logo.png',
        },
        copyright: `Copyright © ${new Date().getFullYear()} DreamX. All Rights Reserved.`,
      },
    }),
};

module.exports = config;
