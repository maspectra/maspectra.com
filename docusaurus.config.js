// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Maspectra - All-in-one modeling and simulation solution",
  tagline: "Modeling and Simulation Solution",
  favicon: "img/logo/icon.ico",

  // Set the production url of your site here
  url: "https://maspectra.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mas", // Usually your GitHub org/user name.
  projectName: "maspectra.com", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"]
  },

  stylesheets: [
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    }
  ],

  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",

          exclude: [
            // '**/_*.{js,jsx,ts,tsx,md,mdx}',
            // '**/_*/**',
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**"
          ]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/maspectra/maspectra.com"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo/icon.png",
      // Announcement
      announcementBar: {
        id: "page_meeting",
        content:
          "We will be present on <a href='https://www.page-meeting.org/default.asp?id=48&keuze=meeting' target='_blank'>31st PAGE meeting 2023 - A Coruña</a>@Booth#9, come and talk with us 😄!",
        textColor: "#091E42",
        isCloseable: false
      },
      metadata: [
        {
          name: "keywords",
          content: "MIDD, modeling and simulation, tools"
        }
      ],
      navbar: {
        title: "Maspectra",
        hideOnScroll: false,
        logo: {
          alt: "Maspectra Logo",
          src: "img/logo/icon.svg"
        },
        items: [
          {
            to: "pathname:///documentation/intro",
            label: "Documentation",
            position: "left"
          },
          {
            to: "pathname:///api-reference/modules",
            label: "API Reference",
            position: "left"
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left"
          },
          {
            href: "https://github.com/orgs/maspectra/discussions",
            label: "Community",
            position: "left",
            className: "maspectra-portal-link"
          },
          {
            href: "https://github.com/orgs/maspectra",
            label: "Our Company",
            position: "left",
            className: "maspectra-portal-link"
          },
          {
            type: "localeDropdown",
            position: "right"
          },
          {
            label: "Sign In",
            href: "https://account.maspectra.com/login/",
            position: "right",
            className: "maspectra-portal-signup maspectra-portal-link"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "pathname:///documentation/intro"
              },
              {
                label: "API Reference",
                to: "pathname:///api-reference/modules"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Github Discussion",
                href: "https://github.com/orgs/maspectra/discussions"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                to: "/blog",
                label: "Blog"
              },
              {
                label: "GitHub",
                href: "https://github.com/maspectra/maspectra.com"
              }
            ]
          }
        ],
        copyright: `Copyright © 2023 Maspectra, Inc.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
