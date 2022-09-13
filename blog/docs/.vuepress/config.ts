import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import { gungnirTheme, i18n } from "vuepress-theme-gungnir";
import { navbar, sidebar } from "./configs";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  base: "/",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/jpg",
        sizes: "16x16",
        href: `/img/logo.jpg`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/jpg",
        sizes: "32x32",
        href: `/img/logo.jpg`
      }
    ],
    // ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    // ["meta", { name: "application-name", content: "Gungnir Theme" }],
    // ["meta", { name: "apple-mobile-web-app-title", content: "Gungnir Theme" }],
    // [
    //     "meta",
    //     { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    // ],
    // [
    //     "link",
    //     { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    // ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  // site-level locales config
  locales: {
    "/": {
      lang: "zh-TW",
      title: "Hao博客",
      description: "積極向上的前端新手"
    }
    // "/en/": {
    //     lang: "en-US",
    //     title: "Hao Blog",
    //     description: "Hao Blog"
    // }
  },

  // specify bundler via environment variable
  bundler:
    process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler(),

  // configure default theme
  theme: gungnirTheme({
    repo: "Hao",
    docsDir: "docs",
    editLink: false,
    blogNumPerPage: 10,
    colorMode: "dark",
    hitokoto: "false",
    locales: {
      "/": {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        ...i18n.zh,
        navbarTitle: "Hao"
      }
      // "/en/": {
      //     navbar: navbar.en,
      //     sidebar: sidebar.en,
      //     navbarTitle: "Hao",
      // }
    },

    personalInfo: {
      name: "Hao",
      avatar: "/img/logo.jpg",
      description: "Hao's blog",
      sns: {
        github: "haooo0504",
        email: "cjunhao0504@gmail.com",
        instagram: {
          icon: "bi-instagram",
          link: "https://www.instagram.com/jun_hao_05/"
        }
      }
    },

    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      }
    ],

    // other pages
    pages: {
      tags: {
        title: "標籤",
        subtitle: "所有標籤頁",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .1)"
        }
      },
      links: {
        title: "鏈結",
        subtitle: "收藏網頁",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.2)"
        }
      }
    },

    themePlugins: {},
    footer: `
                &copy; <a href="https://github.com/haooo0504" target="_blank">Hao</a> 2022
                `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    }
  },

  plugins: []
});
