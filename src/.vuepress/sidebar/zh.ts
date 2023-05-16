import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "creative",
      text: "版本更新",
      prefix: "update/",
      link: "update/",
      children: "structure",
      collapsible: true,
    },
  ],
});
