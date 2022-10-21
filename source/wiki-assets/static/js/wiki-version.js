var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-style: oblique;
font-size:14px;
color: rgb(244,167,89);
font-weight: 400;
`

var styleContent = `
color: rgb(30,152,255);
`
/* 内容代码 */
var title1 = '📖 RoidMC Wiki '
var title2 = 'Hello :P'
var content = `
🏡 官网:  https://www.roidmc.com
📎 开源地址： https://github.com/roidmc/wiki
🔧 版本： 0.0.2

本网站由Hexo强力驱动！
点该链接有惊喜 https://rmc.ink/funny 
`

console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)