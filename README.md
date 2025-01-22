# <img alt="RoidMC-Wiki" width="30" src="https://raw.githubusercontent.com/RoidMC/wiki/refs/heads/main/src/assets/imgs/logo/logo-big-r-text-RoundCorner.png" /> RoidMC Wiki

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?style=flat-square)](https://github.com/RoidMC/wiki/blob/main/LICENSE)
[![Astro-Based](https://img.shields.io/badge/-astro-gray?style=flat-square&logo=Astro)](https://astro.build)
[![Built with Starlight](https://img.shields.io/badge/Built_with_Starlight-gray?style=flat-square&logo=Github)](https://starlight.astro.build)

## 💬 摘要

* 本项目基于[Astro](https://astro.build)和[Starlight](https://starlight.astro.build)主题开发，取代基于Hexo的旧版Wiki
* 同时Wiki内的文章等均采用[CC NC-BY-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)许可
* 存储库采用[GPL-V3](https://github.com/RoidMC/wiki/blob/main/LICENSE)开源协议

## 🚀 项目结构

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
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 文档资料

- [Starlight文档](https://starlight.astro.build/)
- [Astro文档](https://docs.astro.build)

🎨  数据统计
---

[![Issues](https://img.shields.io/github/issues/RoidMC/wiki?style=flat-square)](https://github.com/RoidMC/wiki/issues)
[![Issues-Closed](https://img.shields.io/github/issues-closed/RoidMC/wiki?style=flat-square)](https://github.com/RoidMC/wiki/issues?q=is%3Aissue+is%3Aclosed)
[![Pull-pr](https://img.shields.io/github/issues-pr/RoidMC/wiki?style=flat-square)](https://github.com/RoidMC/wiki/pulls)
[![Pull-pr-closed](https://img.shields.io/github/issues-pr-closed/RoidMC/wiki?style=flat-square)](https://github.com/RoidMC/wiki/pulls?q=is%3Apr+is%3Aclosed)

2020 - 2025 © [RoidMC Studios](https://www.roidmc.com) 

<!-- 
Bro不想自己动手翻译，Wiki内的英文内容就请了Deepl大仙助力
如果你看到了这个注释，为何不试试访问https://rmc.ink/funny
里面真的不是RickRollllllll ;P
 -->