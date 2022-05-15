
import { defineConfig } from "vitepress";

export default defineConfig({
  markdown: {
    lineNumbers: true,
  },
  title: "js-utils", // 网站标题
  description: "js-utils", //网站描述
  base: "/", //  部署时的路径 默认 /  可以使用二级地址 /base/
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

    //   repo: 'vuejs/vitepress', // 你的 github 仓库地址，网页的右上角会跳转
    //   头部导航
    nav: [
      { text: "首页", link: "/" },
      { text: "函数", link: "/function/" },
      // { text: '关于', link: '/about/' },
    ],

    //   侧边导航
    sidebar: {
      // "/guide": [
      //   {
      //     text: "简介",
      //     children: [
      //       { text: "开始", link: "/guide/getStart" },
      //     ],
      //   },
      // ],
      "/function/": [
        {
          text: "文件流",
          children: [
            { text: "htmlFileToBase64", link: "/function/htmlFileToBase64/htmlFileToBase64", },
            { text: "htmlFileToBlob", link: "/function/htmlFileToBlob/htmlFileToBlob" },
            { text:"htmlCompressImage",link:'/function/htmlCompressImage/htmlCompressImage' }
            // { text: "日志", link: "/components/log" },
            // { text: "Button", link: "/components/button/" },
            // { text: "Layout", link: "/components/layout/" },
            // { text: "contextmenu", link: "/components/contextmenu/" },
          ],
        },
      ],
      "/": [
        {
          text: "简介",
          link: "/guide/",

          children: [
            { text: "开始", link: "/guide/getStart" }
          ],
        },
        {
          text: "函数",
          link: "/function/",
        },
      ],
    },
  },
});
