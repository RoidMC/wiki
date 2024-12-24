/*
* RoidMC Wiki Project
* Config File - Themes config (Sidebar Config)
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

export const sidebar_config =     [
    {
        label: "leadingNavLinks",
        items: [
          { label: "Docs", link: "docs" },
          { label: "Wiki", link: "wiki/intro" }
        ]
    },
    
    {
        label: 'Docs',
        items: [
            { slug: 'docs'},
            { label: 'Docs-Intro', slug: 'docs'},
            //{ label: 'Demo', slug: 'wiki/intro' },
        ],
    },
    {
        label: 'Wiki',
        collapsed: true,
        items: [
            { 
                label: '元梦地图FAQ',
                badge: '元梦UGC',
                collapsed: true,
                items: [
                    { 
                        label: '悦动几何', autogenerate: { directory: 'wiki/dreamstar' }, 
                        //label: '末世求生', autogenerate: { directory: 'wiki/dreamstar/the-crust' },  
                    },
                ]
            }
        ],
        //autogenerate: { directory: 'en-us' },
    }, 
];