import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  {
    text: "主页",
    icon: "home",
    link: "/",
  },
  {
    text: "笔记",
    prefix: "/notes/",
    icon: "note",
    children: [
      {
        text: "javaScript",
        icon: "js", 
        link: 'javaScript/01.md',
      },
      {
        text: "vue",
        // icon: "/assets/icon/svg/vue.svg", 
        icon: "Vue", 
        link: 'vue/01.md',
      },
      {
        text: "代码片段",
        icon: "daimapianduan", 
        link: 'codeSnippet/01_前言.md',
      },
    ],
  },
  {
    text: "服务端",
    prefix: "/server/",
    icon: "service-full",
    children: [
      {
        text: "nodeJS",
        icon: "nodejs1", 
        link: 'node/01.md',
      },
    ],
  },
  {
    text: '时间轴',
    icon: 'time',
    link: '/timeline/'
  },
]);
