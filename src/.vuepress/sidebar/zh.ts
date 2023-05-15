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
<<<<<<< HEAD
      text: "版本更新",
      icon: "creative",
      prefix: "",
      link:"update/",
      collapsible: true,
      children: [
        "update/v2.6.1",
        "update/v2.6.0",
        "update/v2.5.6",
        "update/v2.5.5",
        "update/v2.5.4",
      ]
=======
      text: "文档",
      // icon: "note",
      prefix: "guide/",
      children: "structure",
>>>>>>> 56844ca65e7cdbcd5a35546ae0e51b027dc3dc2f
    },
    "slides",
  ],
});
