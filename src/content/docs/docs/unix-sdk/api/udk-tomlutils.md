---
title: 🧰 UDK.TomlUtils
description: RoidMC Docs | UniX Dev Kit API Reference | UDK.TomlUtils
---

## UniX-SDK.TomlUtils
---

### UDK.TomlUtils.Parse

> 说明：解析Toml字符串

> 范围：服务端 / 客户端

|  传参/返回值   | 类型  | 说明 |
|  ----  | ----  | ---- |
| @param toml_string | string | Toml字符串 |
| @return data  | table | 解析的结果 | 

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
