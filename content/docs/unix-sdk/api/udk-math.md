---
title: 🧰 UDK.Math
description: RoidMC Docs | UniX SDK API Reference | UDK.Math
---

## UniX-SDK.Math
---

### UDK.Math.Convert_To_Percentage

:::note[API功能]
说明：将输入值转换为百分比

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param value | number | 要转换的值 |
| @param min_value | number | 进度最小值 |
| @param max_value | number | 进度最大值 |
| @return percentage | number | 百分比 |

```lua
-- 示例代码
local value = 50
local min_value = 0
local max_value = 100
local percentage = UDK.Math.ConvertToPercentage(value, min_value, max_value)

print("Precentage: ",percentage) -- Output: 50
```

### UDK_Math.Convert_Seconds_To_hms

> `UDK_Math.Convert_Seconds_To_hms(seconds, display_hms)`

> **将秒数转换为小时、分钟、秒的格式**

```lua
-- 示例代码
local TimeConvert = UDK.Math.Convert_Seconds_To_hms(3600, hms)

LoggerService.BlocklyLog("Info", TimeConvert) -- Output: 01:00:00
```

### UDK_Math.Clac_Sqrt

> `UDK_Math.Clac_Sqrt(Pos_X, Pos_Y)`

> **计算两个向量的距离**

```lua
-- 示例代码
local Distance = UDK.Math.Clac_Sqrt(3, 4)

LoggerService.BlocklyLog("Info", Distance) -- Output: 5
```
