import { defineConfig } from 'vitepress'
import { defineHorizonConfig } from '@roidmc/horizon-theme/config'
import { uniIconsPlugin, uniIconsMarkdown } from '@roidmc/vitepress-uni-icons'

export default defineConfig(defineHorizonConfig({
  srcDir: "content",
  // 先跑起来再说，死链接后面再修
  ignoreDeadLinks: true,

  // 启用 i18n 自动加载
  i18n: {
    debug: false,
    defaultLocale: 'zh-CN',
  },

  // 启用 sidebar 自动生成
  sidebar: {
    debugPrint: false,
    collapsed: true,
    useTitleFromFileHeading: true,
    includeRootIndexFile: true
  },

  markdown: {
    config(md) {
      uniIconsMarkdown(md)
    },
    container: {
      infoLabel: "INFO",
      noteLabel: "NOTE",
      tipLabel: "TIP",
      warningLabel: "WARNING",
      dangerLabel: "DANGER",
      importantLabel: "IMPORTANT",
      cautionLabel: "CAUTION",
      detailsLabel: "Details",
    }
  },

  vite: {
    plugins: [
      uniIconsPlugin() as any,
    ],
  },

  locales: {
    root: {
      lang: 'zh-CN',
      label: '简体中文',
      themeConfig: {
        nav: [
          { text: 'Docs', link: '/docs' },
          { text: 'Wiki', link: '/wiki' }
        ],
      }
    },
    'en-US': {
      lang: 'en-US',
      label: 'English',
      themeConfig: {
        nav: [
          { text: 'Docs', link: '/en-US/docs' },
          { text: 'Wiki', link: '/en-US/wiki' }
        ],
      }
    }
  },

  title: "RoidMC Wiki",
  description: "RoidMC Wiki",
  head: [
    ['link', { rel: 'icon', href: '/wiki-assets/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/wiki-assets/imgs/logo/logo-big-r-text-RoundCorner.png',
    search: {
      provider: 'local'
    },

    features: {
      linkIcon: {
        enable: true,
        style: 'favicon'
      },
      externalLinkGuard: {
        enable: true,
        whitelist: ['github.com']
      },
      imgViewer: {
        enable: true
      }
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/roidmc/roidmc-wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Made with ❤️ | Horizon Theme',
      copyright: '© RoidMC Studios | 赣ICP备2021006150号-1',
      hallowText: 'ROIDMC STUDIOS'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/roidmc' }
    ]
  }
}))
