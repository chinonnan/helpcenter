import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/vue-press-hope-demo/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Help center",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "帮助中心",
      description: "时空云平台的帮助中心",
    },
  },

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
