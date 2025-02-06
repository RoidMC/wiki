/**
 * RoidMC Wiki Project
 * Config File - Themes config (Starlight Sidebar Config)
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * If you need to distribute relevant code, please strictly comply with the relevant regulations of the open source license.
 *
 * Website: https://www.roidmc.com
 * Github: https://github.com/RoidMC
 * 
 * 2024 © RoidMC Studios
 */

/**
 * Sidebar数组配置定义
 * Sidebar array configuration definition
 */
export const sidebar_config = [
    {
        label: 'Docs',
        items: [
            { slug: 'docs' },
            { label: '📝 用户协议', translations: { 'en-US': '📝 Terms' }, collapsed: true, autogenerate: { directory: 'docs/terms' } },
            //{ label: 'Docs-Intro', slug: 'docs'},
        ],
    },
    {
        label: 'Wiki',
        collapsed: true,
        items: [
            { slug: 'wiki' },
            {
                label: '🎲 元梦地图 UGC',
                translations: { 'en-US': "🎲 Let's Go UGC" },
                badge: 'FAQ',
                collapsed: true,
                items: [
                    { label: '🕹️ 游戏项目', translations: { 'en-US': '🕹️ Games' }, autogenerate: { directory: 'wiki/dreamstar/games' } },
                    { label: '🛠️ 更新日志', translations: { 'en-US': '🛠️ ChangeLog' }, autogenerate: { directory: 'wiki/dreamstar/changelog' } },
                ]
            }
        ],
        //autogenerate: { directory: 'en-us' },
    },
    {
        label: "leadingNavLinks",
        items: [
            { label: "Docs", link: "docs" },
            { label: "Wiki", link: "wiki" }
        ]
    },
];