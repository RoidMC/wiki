---
title: 🧰 UDK.Array
description: RoidMC Docs | UniX SDK API Reference | UDK.Array
---

## UniX-SDK.Array
---

### UDK.Array.GetValueByEnum

:::note[API功能]
说明：获取枚举数组内的指定数据

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param table | table | 枚举数组 |
| @param target | string/number | 目标Key值或Value值 |
| @return value  | string/number | 返回的Key值或Value值 |

```lua
-- 示例代码
local CoolStuff = {Foo="Foo", Bar="Bar", Baz="Baz"}

print(UDK.Array.GetValueByEnum(CoolStuff, "Bar")) -- Output: Bar
```

### UDK.Array.AddValueByEnum

:::note[API功能]
说明：向枚举数组内的添加指定数据

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param table | table | 枚举数组 |
| @param key | string | 要设置的Key值 |
| @param value | string/number | 要设置的Value值 |

```lua
-- 示例代码
local CoolStuff = {Foo="Foo", Bar="Bar", Baz="Baz"}

UDK.Array.AddValueByEnum(CoolStuff, "SUS", 123)

print(UDK.Array.GetValueByEnum(CoolStuff, "SUS")) -- Output: 123
```

### UDK.Array.RemoveValueByEnum

:::note[API功能]
说明：移除枚举数组内的添加指定数据

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param table | table | 枚举数组 |
| @param taget | string/number | 目标的Key值或Value值 |

```lua
-- 示例代码
local CoolStuff = {Foo="Foo", Bar="Bar", Baz="Baz"}

UDK.Array.RemoveValueByEnum(CoolStuff, "Foo")

print(UDK.Array.GetValueByEnum(CoolStuff, "Foo")) -- Output: nil
```

### UDK.Array.ReplaceValueByEnum

:::note[API功能]
说明：替换枚举数组内的指定数据

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param table | table | 枚举数组 |
| @param target | string/number | 目标Key值或Value值 |
| @param newValue | string/number | 新的替换Value值 |

```lua
-- 示例代码
local CoolStuff = {Foo="Foo", Bar="Bar", Baz="Baz"}

UDK.Array.ReplaceValueByEnum(CoolStuff, "Foo", 123)

print(UDK.Array.GetValueByEnum(CoolStuff, "Foo")) -- Output: 123
```

### UDK.Array.ForKeyToValueRegX

:::note[API功能]
说明：根据正则表达式遍历枚举数组内的指定数据

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param table | table | 枚举数组 |
| @param regX | string | 正则表达式 |
| @return table  | table | 返回的枚举数组 |

```lua
-- 示例代码
local CoolStuff = {Foo="Foo", Bar="Bar", Baz="Baz"}

-- 遍历所有以 Ba 开头的键，并返回值（使用"."匹配任何字符）
local myTable = UDK.Array.ForKeyToValueByEnum(CoolStuff, "Ba")

for key, value in pairs(myTable) do
    print( value) -- Output: Bar, Baz
end
```

### UDK.Array.SortArrayByKey

:::note[API功能]
说明：通用排序函数，按Key排序

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param table | table | 要排序的数组 |
| @return table  | sorted_table | 返回排序后的数组 |

```lua
-- 示例代码
local CoolStuff = {Foo="Foo", Bar="Bar", Baz="Baz"}
local sorted_table = UDK.Array.SortArrayByKey(CoolStuff)

for key, value in pairs(sorted_table) do
    print( value) -- Output: Bar, Baz, Foo
end
```
