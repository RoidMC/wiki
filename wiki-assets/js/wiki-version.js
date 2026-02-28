var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: black; 
border-radius: 3px 0 0 3px; 
padding: 2px 2px 1px 10px; 
background: #00DC82
`
var styleTitle2 = `
font-style: oblique;
font-size:20px;
font-weight: 400;
color: white; 
border-radius: 0 3px 3px 0; 
padding: 2px 10px 1px 10px; 
background: #212121
`

var styleContent = `
color: rgb(30,152,255);
`

var styleCopyinfo = `
color: #8b8b8b;
`

/* 内容代码 */
var title1 = '✨ RoidMC Studios'
var title2 = 'SUS ඞ'
var content = `
🏡 官网: https://www.roidmc.com
🏡 社区: https://www.rmc.ink/community
🏡 Wiki: https://wiki.roidmc.com
🔧 版本：RoidMC Wiki-0.0.4

本网站由Astro强力驱动！
点该链接有惊喜 https://rmc.ink/funny 
`
var copyinfo = `
2020 - 2025 © RoidMC Studios
Built With Astro & Starlight
`

console.log(`%c${title1} %c${title2} 
%c${content} %c${copyinfo}` , styleTitle1, styleTitle2, styleContent,styleCopyinfo)