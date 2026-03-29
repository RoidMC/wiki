# <img alt="RoidMC-Wiki" width="30" src="https://raw.githubusercontent.com/RoidMC/wiki/refs/heads/main/src/assets/imgs/logo/logo-big-r-text-RoundCorner.png" /> RoidMC Wiki

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?style=flat-square)](https://github.com/RoidMC/wiki/blob/main/LICENSE)
[![Horizon Theme](https://img.shields.io/badge/-Horizon_Theme-gray?style=flat-square&logo=Json)](https://github.com/roidmc)
[![Powered by Horizon](https://img.shields.io/badge/Powered_by_Horizon-gray?style=flat-square&logo=Github)](https://github.com/roidmc)

## 💬 摘要

* 本项目基于内部自研[Horizon Theme](https://github.com/roidmc)开发，使用`Horizon Pulse`技术对Vitepress实现了动态HMR，无需刷新页面即可查看最新内容（动态SPA）
* 同时Wiki内的文章等均采用[CC NC-BY-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)许可
* 存储库采用[GPL-V3](https://github.com/RoidMC/wiki/blob/main/LICENSE)开源协议

## 🚀 项目结构

`还没重写完，懒得改这里`

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   ├── pages/
│   └── env.d.ts
├── astro.config.ts
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 CLI命令

我们使用`pnpm`作为包管理器，推荐您安装`pnpm`后进行操作:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:5321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |

## 👀 文档资料

- [VitePress文档](https://vitepress.dev)

🎨  数据统计
---

[![Issues](https://img.shields.io/github/issues/RoidMC/wiki?style=flat-square)](https://github.com/RoidMC/wiki/issues)
[![Issues-Closed](https://img.shields.io/github/issues-closed/RoidMC/wiki?style=flat-square)](https://github.com/RoidMC/wiki/issues?q=is%3Aissue+is%3Aclosed)
[![Pull-pr](https://img.shields.io/github/issues-pr/RoidMC/wiki?style=flat-square)](https://github.com/RoidMC/wiki/pulls)
[![Pull-pr-closed](https://img.shields.io/github/issues-pr-closed/RoidMC/wiki?style=flat-square)](https://github.com/RoidMC/wiki/pulls?q=is%3Apr+is%3Aclosed)


---
 <img alt="TencentEdgeOne-Logo" width="200" src="https://edgeone.ai/media/34fe3a45-492d-4ea4-ae5d-ea1087ca7b4b.png" />

- CDN acceleration and security protection for this project are sponsored by Tencent EdgeOne: EdgeOne offers a long-term free plan with unlimited traffic and requests, covering Mainland China nodes, with no overage charges. Interested friends can click the link below to claim it

- [Best Asian CDN, Edge, and Secure Solutions - Tencent EdgeOne](https://edgeone.ai/?from=github)

2020 - 2026 © [RoidMC Studios](https://www.roidmc.com)  | CDN acceleration and security protection for this project are sponsored by [Tencent EdgeOne](https://edgeone.ai/?from=github)

<!-- 
Bro不想自己动手翻译，Wiki内的英文内容就请了Deepl大仙助力
如果你看到了这个注释，为何不试试访问https://rmc.ink/funny
里面真的不是RickRollllllll ;P
 -->