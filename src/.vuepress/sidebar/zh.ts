import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    // {
    //   icon: "discover",
    //   text: "案例",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "版本更新",
      icon: "creative",
      prefix: "",
      link:"update/",
      collapsible: true,
      children: "structure"
    },
    "slides",
  ],
});
