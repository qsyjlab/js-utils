
import { defineConfig } from "vitepress";

export default defineConfig({
  markdown: {
    lineNumbers: true,
  },
  title: "Js Utils", // 网站标题
  description: "js-utils", //网站描述
  base: "/js-utils", //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  head: [
    // 改变title的图标
    // [
    //   "link",
    //   {
    //     rel: "icon",
    //     href: "/img/linktolink.png", //图片放在public文件夹下
    //   },
    // ],
  ],
  
  // 主题配置
  themeConfig: {
  
    repoLabel: "GitHub",
    repo: "qsyjlab/js-utils",
    docsBranch: "main",
    //   头部导航
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getStarted" },
      { text: "Change Log", link: "/log/changelog" },
    ],

    //   侧边导航
    sidebar: {
      "/functions/": [
  
        {
          text: "文件流",
          children: [
            { text: "htmlFileToBase64", link: "/functions/htmlFileToBase64/htmlFileToBase64", },
            { text: "htmlFileToBlob", link: "/functions/htmlFileToBlob/htmlFileToBlob" },
            { text:"htmlCompressImage",link:'/functions/htmlCompressImage/htmlCompressImage' },
            { text:"htmlBase64ToBlob",link:'/functions/htmlBase64ToBlob/htmlBase64ToBlob' },
          ],
        },
      ],
      "/guide/": [
        {
          text: "Guide",
          children: [
            { text: "Get Started", link: "/guide/getStarted" }
          ],
        },
        {
          text: "Functions",
          link: "/functions/index",
        },
        {
          text: "Change Log",
          link: "/log/changelog",
        },
      ],
      "/":[]
    },
  },
});
