/*
* RoidMC Wiki Project
* Config File - Themes config (Starlight Head Config)
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

export const head_config = [
    {
        // Wiki Version (Console Log Eggs :D)
        tag: 'script',
        attrs: {
            src: "/wiki-assets/js/wiki-version.js"
        },
    },
    {
        // Google Analytics
        tag: 'script',
        attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-T4Y5ZHGF31'
        },
    },
    {
        // Google Analytics
        tag: 'script',
        content: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-T4Y5ZHGF31');
        `,
    },
    {
        // Baidu Analytics
        tag: 'script',
        content: `
        var _hmt = _hmt || [];
        (function() {var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?642a4be104cf9de69853a8f0b89276ce";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
        `,
    },
    {
        // 51LA Analytics
        tag: 'script',
        attrs: {
            type: 'text/javascript',
            src: 'https://js.users.51.la/21939415.js'
        }
    },
    {
        // Keywords
        tag: 'meta',
        attrs: {
            name: 'keywords',
            content: 'RoidMC,RoidMC Studios'
        }
    },
    {
        // NoScript
        tag: 'noscript',
        content: 'Javascript is required'
    }
];