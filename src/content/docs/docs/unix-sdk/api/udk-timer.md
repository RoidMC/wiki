---
title: 🧰 UDK.Timer
description: RoidMC Docs | UniX SDK API Reference | UDK.Timer
---

## UniX-SDK.Timer
---
 
### UDK.Timer.StartForwardTimer

:::note[API功能]
说明：创建正向计时器

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param label | any | 计时器标签 |
| @param duration | number | 计时器开始时间 |
| @param unit | string? | 时间单位('s'或'ms') |
| @param allowOverride | boolean? | 是否允许覆盖现有计时器标签 |
| @return string | label | 定义的计时器标签 |

```lua
-- 示例代码
UDK.Timer.StartForwardTimer("MyTimer", 0, "s")
```

### UDK.Timer.StartBackwardTimer

:::note[API功能]
说明：创建倒数计时器

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param label | any | 计时器标签 |
| @param time | number | 计时器时长 |
| @param isLoop | boolean? | 是否循环 |
| @param unit | string? | 时间单位('s'或'ms') |
| @param allowOverride | boolean? | 是否允许覆盖现有计时器标签 |
| @return string | label | 定义的计时器标签 |

```lua
-- 示例代码
UDK.Timer.StartBackwardTimer("MyTimer", 1000, "s")
```

### UDK.Timer.GetTimerTime

:::note[API功能]
说明：获取计时器时间

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param label | string/number | 定义的计时器标签 |
| @param unit | string? | 时间单位('s'或'ms') |
| @return number | time | 剩余时间(根据unit的值，默认s) |
| @return string | errorMsg | 错误信息 |

```lua
-- 示例代码
local timer = UDK.Timer.GetTimer("MyTimer")
print("MyTimer time: " .. timer)
```

### UDK.Timer.PauseTimer

:::note[API功能]
说明：暂停计时器

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param label | string/number | 定义的计时器标签 |

```lua
-- 示例代码
UDK.Timer.PauseTimer("MyTimer")
```

### UDK.Timer.ResumeTimer

:::note[API功能]
说明：恢复计时器

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param label | string/number | 定义的计时器标签 |

```lua
-- 示例代码
UDK.Timer.ResumeTimer("MyTimer")
```

### UDK.Timer.ResetTimer

:::note[API功能]
说明：重置计时器

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param label | string/number | 定义的计时器标签 |
| @param duration | number | 重置后的计时器时长 
| @param unit | string? | 时间单位('s'或'ms') |

```lua
-- 示例代码
UDK.Timer.ResetTimer("MyTimer", 1000, "s")
```

### UDK.Timer.RemoveTimer

:::note[API功能]
说明：移除计时器

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param label | string/number | 定义的计时器标签 |

```lua
-- 示例代码
UDK.Timer.RemoveTimer("MyTimer")
```