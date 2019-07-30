/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: "/img/docusaurus.svg",
    infoLink: "https://www.banksearch-consultancy.com",
    pinned: true
  }
];

// https://stackoverflow.com/a/55940426/5502986
const extLink = require("remarkable-extlink");

const siteConfig = {
  title: "BCU Data Collection", // Title for your website.
  tagline: "Documentation",
  // For github.io domain:
  url: "https://msdcanderson.github.io", // Your website URL
  baseUrl: "/bcu/", // Base URL for your project */
  // For custom domain:
  //url: "https://bcu-docs.growmycompany.co.uk", // Your website URL
  // baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "bcu",
  organizationName: "msdcanderson",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "overview", label: "Docs" }
    //{ doc: "doc4", label: "API" },
    //{ page: "help", label: "Help" },
    //{ blog: true, label: "Blog" }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  //headerIcon: "img/docusaurus.svg",
  headerIcon: "img/logo.svg",
  footerIcon: "img/docusaurus.svg",
  favicon: "img/favicon.png",

  /* Colors for website */
  colors: {
    primaryColor: "#005B7B",
    secondaryColor: "#98C138"
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} BankSearch Information Consultancy Ltd.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://msdcanderson.github.io/docusaurus-open-link-new-tab.github.io/open-link-new-tab.js"
  ],

  // Add plugins to Markdown
  markdownPlugins: [
    function(md) {
      extLink(md, {
        host: "yourhost.com" // The hrefs that you DON'T want to be external
      });
    },
    md => {
      require("remarkable-plantuml")(md, { base_path: "./static" });
    }
  ],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/docusaurus.png",
  twitterImage: "img/docusaurus.png",

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  // Colapsible Categories 'https://docusaurus.io/docs/en/navigation#active-links-in-site-navigation-bar'
  docsSideNavCollapsible: true
};

module.exports = siteConfig;
