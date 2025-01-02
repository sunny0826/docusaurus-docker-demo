import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '云原生之路',
  tagline: '云原生爱好者、实践者，专注于云原生及周边干货知识分享',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://suuny0826.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'mysite', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '云原生之路',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © 2022-${new Date().getFullYear()} 云原生之路 Built with Docusaurus. <br/><a class="footer__link-item" href="https://beian.miit.gov.cn/">网站备案：沪ICP备2023001825号-1</a><br><img src="/img/beian.png" class="beian" /> <a class="footer__link-item" href="https://beian.mps.gov.cn/#/query/webSearch?code=31011402010675" rel="noreferrer" target="_blank">沪公网安备31011402010675</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
