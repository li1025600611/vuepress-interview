/*
 * Author  rhys.zhao
 * Date  2023-03-02 14:02:43
 * LastEditors  Vincy.Li
 * LastEditTime  2023-07-13 11:27:50
 * Description
 */

module.exports = {
  base: "/vuepress-interview/",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/imgs/favicon.ico" }]],
  title: "速学Webpack5",
  description: "用最简单的方式学习Webpack5",

  port: "0512",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/imgs/webpack-logo.svg",
    repoLabel: "点亮⭐收藏",
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
      {
        text: "🤔 原理篇",
        link: "/origin/",
      },
    ],
    sidebar: {
      "/base/": [
        {
          text: "基础篇",
          children: [
            "/base/README.md",
            "/base/example.md",
            "/base/plugin.md",
            "/base/loader.md",
            "/base/asset.md",
            "/base/server.md",
            "/base/env.md",
            "/base/summary.md",
          ],
        },
      ],
      "/senior/": [
        {
          text: "进阶篇",
          children: [
            "/senior/README.md",
            "/senior/source-map.md",
            "/senior/hmr.md",
            "/senior/tree-shaking.md",
            "/senior/code-split.md",
            "/senior/react-cli.md",
            "/senior/optimize.md",
          ],
        },
      ],
      "/origin/": [
        {
          text: "原理篇",
          children: ["/origin/README.md"],
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
