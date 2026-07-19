// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are two ways to add type annotations for your Docusaurus config.
// 1. Rely on Docusaurus to infer types with JSDoc comments
// 2. Use TypeScript in a docusaurus.config.ts file

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chase The Split',
  tagline: 'Knowledge Base and Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jaypolansky1.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Chase-The-Split-Knowledge-Base/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jaypolansky1', // Usually your GitHub org/user name.
  projectName: 'Chase-The-Split-Knowledge-Base', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this line if you don't want to edit on GitHub
          editUrl:
            'https://github.com/jaypolansky1/Chase-The-Split-Knowledge-Base/tree/docusaurus-setup/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this line if you don't want to edit on GitHub
          editUrl:
            'https://github.com/jaypolansky1/Chase-The-Split-Knowledge-Base/tree/docusaurus-setup/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Chase The Split',
        logo: {
          alt: 'Chase The Split Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/jaypolansky1/Chase-The-Split-Knowledge-Base',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jaypolansky1/Chase-The-Split-Knowledge-Base',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chase The Split. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
