import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator'
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlight from "@astrojs/starlight";
import sitemap from '@astrojs/sitemap';
import starlightImageZoom from 'starlight-image-zoom'
import { sidebar_config } from './src/config/sidebar.config.ts'
import { head_config } from './src/config/head.config.ts' 

// https://astro.build/config
export default defineConfig({
    site: 'https://wiki.roidmc.com',
    integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'root',
				locales: {
				    root: 'zh-CN',
				    'en-us': 'en-US'
				}
			}			
		}),
		starlight({
        title: 'RoidMC Wiki',
        logo: {
            light: '/src/assets/imgs/logo/logo-big-r-text-RoundCorner.png',
            dark: '/src/assets/imgs/logo/logo-big-r-text-RoundCorner.png',
            replacesTitle: true,
        },
        favicon: '/wiki-assets/favicon.ico',
        head: head_config,
        defaultLocale: 'root',
        locales: {
			root: {
				label: '简体中文',
				lang: 'zh-CN',
			},
			'en-us': {
				label: 'English',
				lang: 'en-US',
			}
        },
        social: {
            //discord: 'https://rmc.ink/social/discord',
            github: 'https://github.com/RoidMC/wiki',
        },
        sidebar: sidebar_config,
        lastUpdated: true,
        editLink: {
            baseUrl: 'https://github.com/roidmc/wiki/edit/main/',
            label: '在 GitHub 上编辑此页',
        },
        expressiveCode: {
            styleOverrides: { borderRadius: '6px' },
          },
        customCss: [
            './src/assets/css/style.css'
        ],
        components: {
            ContentPanel: './src/components/rmc-custom/content-panel.astro',
            Footer: './src/components/rmc-custom/common-footer.astro'
        },
        plugins: [
            starlightUtils({
                navLinks: {
                    leading: { useSidebarLabelled: "leadingNavLinks" }
                },
                multiSidebar: {
                    switcherStyle: "horizontalList",
                }
            }),
            starlightLinksValidator({
                exclude: ['/docs','/wiki/intro','/en-us/docs','/en-us/wiki/intro'],
                errorOnRelativeLinks: false,
            }),
            starlightImageZoom()
        ],
		}), tailwind({ applyBaseStyles: false }), sitemap()],
});