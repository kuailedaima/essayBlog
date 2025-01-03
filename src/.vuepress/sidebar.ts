import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/": [
  //   "",
  //   {
  //     text: "案例",
  //     icon: "laptop-code",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文档",
  //     icon: "book",
  //     prefix: "guide/",
  //     children: "structure",
  //   },
  //   "slides",
  // ],
  '/notes/': [
    {
      text: 'javaScript',
      icon: 'js',
      prefix: 'javaScript/',
      link: '',
      collapsible: true,
      children: 'structure',
    },
    {
      text: 'vue',
      icon: 'Vue',
      prefix: 'vue/',
      link: '',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '代码片段',
      icon: 'daimapianduan',
      prefix: 'codeSnippet/',
      link: '',
      collapsible: true,
      children: 'structure',
    },
  ],
});
