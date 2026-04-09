---
title: 🧰 UDK.Property
description: RoidMC Docs | UniX SDK API Reference | UDK.Property
---

:::danger[警告]

当前版本ACL功能未实现客户端侧防篡改，使用时请注意！

:::

## UDK Property 枚举
---

### UDK.Property.Access_Level

| 枚举值 | 说明 |
| ---- | ---- |
| Public | 公开访问 |
| ServerOnly | 仅服务端访问 |
| ClientOnly | 仅客户端访问 |

### UDK.Property.Type

:::note
说明：如果使用关联数组，类型只能是`Map`，其它类型默认支持Array和单个数据存放
:::

| 枚举值 | 说明 |
| ---- | ---- |
| Boolean |  布尔值 |
| Number |  数值 |
| String | 字符串 |
| Array | 数组 |
| Vector3 | 向量 |
| Player | 玩家 |
| Character | 角色 |
| Element | 元件 |
| Prefab | 模组 |
| Prop | 道具 |
| LogicElement | 逻辑元件 |
| MotionUnit | 运动单元 |
| Timer | 计时器 |
| Task | 任务 |
| Effect | 特效 |
| SignalBox | 触发盒 |
| Audio | 音效 |
| Creature | 生物 |
| UIWidget | UI控件 |
| Scene | 场景 |
| Item | 物品 |
| Color | 颜色 |
| Map | 关联数组 |
| Any | 任意类型 |

## UDK Property API列表
---

### UDK.Property.SetProperty

:::note[API功能]
说明：添加或修改属性数据

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param object | string number |对象标识符
| @param propertyType | string | 属性类型
| @param propertyName | string | 属性名称
| @param data | any | 属性值
| @param accessLevel | string |访问级别（可选，默认为Public）
| @return boolean | success | 是否成功
| @return string? | error | 错误信息

```lua
-- 示例代码
UDK.Property.SetProperty("ObjName", "String", "PropertyName", "PropertyValue")
```

### UDK.Property.GetProperty

### UDK.Property.DeleteProperty

### UDK.Property.ClearProperty

### UDK.Property.CheckPropertyHasExist

### UDK.Property.GetAllProperties

### UDK.Property.GetPropertiesByType

### UDK.Property.GetPropertyAccessLevel

### UDK.Property.PrintDebugInfo

### UDK.Property.SetBatchProperties

### UDK.Property.GetSupportedTypes

### UDK.Property.IsArray

### UDK.Property.GetPropertyTypeInfo

### UDK.Property.SyncAuthorityData