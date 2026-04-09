---
title: 🧰 UDK.TomlUtils
description: RoidMC Docs | UniX SDK API Reference | UDK.TomlUtils
---

## UniX-SDK.TomlUtils
---

### UDK.TomlUtils.Parse

:::note[API功能]
说明：解析Toml字符串

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param toml_string | string | Toml字符串 |
| @return data | table | 解析的结果 | 

```lua
-- 示例代码
local myTomlString = [[
title = "TOML Example"

[SDK.Info]
Version = "0.0.1"
Name = "UniX-SDK"
]]

local parseData = UDK.TomlUtils.Parse(myTomlString)

print(parseData.SDK.Info.Version) -- Output: 0.0.1
print(parseData.SDK.Info.Name) -- Output: UniX-SDK
```
