import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://kuailedaima.github.io/essayBlog",

  author: {
    name: "Mr.Wang",
    // url: "https://mister-hope.com",
  },

  // iconAssets: "fontawesome-with-brands",
  // iconAssets: "fontawesome",
  iconAssets: [
    "//at.alicdn.com/t/c/font_4514138_ii4xqntfbph.css",
    // "fontawesome"
  ],

  logo: "/avatar.jpg",

  repo: "kuailedaima/essayBlog",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "默认页脚",

  displayFooter: true,

  encrypt: {
    // config: {
    //   "/demo/encrypt.html": ["1234"],
    // },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  blog: {
    description: "千里之行，始于足下"
  },

  plugins: {
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "kuailedaima/essayBlog-comments",
      repoId: "R_kgDOMBE6YA",
      category: "Announcements",
      categoryId: "DIC_kwDOMBE6YM4CfohR",
    },
    blog: true,
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      // chart: true,
      codetabs: true,
      demo: true,
      // echarts: true,
      figure: true,
      // flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      // katex: true,
      mark: true,
      // mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      // presentation: ["highlight", "math", "search", "notes", "zoom"],
      // revealJs: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    copyCode: {}

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
