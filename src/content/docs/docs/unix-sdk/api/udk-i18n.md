---
title: 🧰 UDK.I18N
description: RoidMC Docs | UniX SDK API Reference | UDK.I18N
---

## UniX-SDK.I18N
---

### UDK.I18N.I18NGetKey

:::note[API功能]
说明：获取指定Key的翻译文本

🗃️ 该接口服务端和客户端通用

📢 该接口依赖`UDK.TomlUtils.Parse`
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param key | string | 要获取的Key |
| @param lang | string | 要获取的翻译语言 |
| @param i18nToml | table | Toml配置文件 |
| @return string | parseKey | 解析后的Key |

```lua
local UDK = require("Floder.SDKPath.main")

local Lang = [[
    [zh-CN]
    language = "简体中文",
    string = "这是一串测试内容"

    [en-US]
    language = "English",
    string = "This is a test content"
]]

local data = UDK.TomlUtils.Parse(Lang)
local resultCN = UDK.I18N.I18NGetKey("string", "zh-CN", data)
local resultEN = UDK.I18N.I18NGetKey("string", "en-US", data)

-- 打印日志 | Print Log
print(resultCN) -- output: 这是一串测试内容
print(resultEN) -- Output: This is a test content
```
