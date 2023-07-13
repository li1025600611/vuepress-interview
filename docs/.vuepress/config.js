/*
 * Author  Vincy.Li
 * Date  2023-03-16 19:16:22
 * LastEditors  Vincy.Li
 * LastEditTime  2023-07-13 20:14:44
 * Description
 */
module.exports = {
  base: "/vuepress-interview/",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/imgs/favicon.ico" }]],
  title: "web tips",
  description: "前端实用小技巧",
  port: "2304",
  open: true,
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/imgs/logo.svg",
    repoLabel: "点亮⭐收藏",
    repo: "https://github.com/li1025600611/vuepress-interview",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "为该章节纠错",
    lastUpdated: "上次更新",
    search: true,
    navbar: [
      {
        text: "😶‍🌫️ 基础篇",
        link: "/base/",
      },
      {
        text: "😶‍🌫️ 进阶篇",
        link: "/senior/",
      },
    ],
    sidebar: {
      "/base/": [
        {
          text: "基础篇",
          children: [
            "/base/README.md",
            "/base/js.md",
            "/base/es6.md",
            "/base/css.md",
            "/base/http.md",
            "/base/react.md",
            "/base/webpack.md",
            "/base/react.md",
            "/base/array.md",
          ],
        },
      ],
      "/senior/": [
        {
          text: "进阶篇",
          children: [
            "/senior/README.md",
            "/senior/browser.md",
            "/senior/cookie.md",
            "/senior/cors.md",
            "/senior/performance.md",
            "/senior/v8.md",
          ],
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
};
