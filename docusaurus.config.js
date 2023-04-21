// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "masolve",
    tagline: "Modeling and Simulation Solution",
    favicon: "img/logo/icon.ico",

    // Set the production url of your site here
    url: "https://your-docusaurus-test-site.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "mas", // Usually your GitHub org/user name.
    projectName: "masolve.com", // Usually your repo name.

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
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
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
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Masolve",
                hideOnScroll: false,
                logo: {
                    alt: "Masolve Logo",
                    src: "img/logo/icon.svg"
                },
                items: [
                    {
                        to: "/docs/intro",
                        label: "Get Started",
                        position: "left"
                    },
                    {
                        to: "/docs/intro",
                        label: "Examples",
                        position: "left"
                    },
                    { to: "/blog", label: "Blogs", position: "left" },
                    {
                        href: "https://github.com",
                        label: "Community",
                        position: "left",
                        className: "masolve-portal-link"
                    },
                    {
                        type: "localeDropdown",
                        position: "right"
                    },
                    {
                        label: "Sign In",
                        href: "https://github.com",
                        position: "right",
                        className: "masolve-portal-signup masolve-portal-link"
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
                                label: "Tutorial",
                                to: "/docs/intro"
                            }
                        ]
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/docusaurus"
                            },
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/docusaurus"
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/docusaurus"
                            }
                        ]
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog"
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/facebook/docusaurus"
                            }
                        ]
                    }
                ],
                copyright: `Copyright © 2023 Masolve, Inc. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
};

module.exports = config;
