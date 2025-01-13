/**
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

/**
 * 添加类型定义，确保TypeScript知道它是什么
 * Add type definitions to ensure TypeScript knows what it is
 */
type HeadConfigItem = {
    tag: 'script' | 'link' | 'style' | 'meta' | 'noscript' | 'title' | 'base' | 'template';
    attrs?: Record<string, string | boolean>;
    content?: string;
};

/**
 * head数组配置定义
 * Head array configuration definition
 */
export const head_config: HeadConfigItem[] = [
    {
        // Wiki Version (Console Log Eggs :D)
        tag: 'script',
        attrs: {
            async: true,
            src: "/wiki-assets/js/wiki-version.js"
        },
    },
    {
        // Google Analytics
        tag: 'script',
        attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-V59KNWGZS0'
        },
    },
    {
        // Google Analytics
        tag: 'script',
        content: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-V59KNWGZS0');
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
            async: true,
            src: 'https://js.users.51.la/21939415.js'
        }
    },
        // CSS Libs
    {
        tag: 'link',
        attrs: {
            rel: 'stylesheet',
            href: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/animate.css/4.1.1/animate.min.css'
        }
    },
    {
        tag: 'link',
        attrs: {
            rel: 'stylesheet',
            href: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css'
        }
    },
        // Prefetch Libs
    {
        tag: 'link',
        attrs: {
            rel: 'dns-prefetch',
            as: 'style',
            href: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/animate.css/4.1.1/animate.min.css'
        }
    },
    {
        tag: 'link',
        attrs: {
            rel: 'dns-prefetch',
            as: 'style',
            href: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css'
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