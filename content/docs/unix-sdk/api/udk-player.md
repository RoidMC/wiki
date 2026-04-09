---
title: 🧰 UDK.Player
description: RoidMC Docs | UniX SDK API Reference | UDK.Player
---

## UniX-SDK.Player
---

### UDK.Player.GetAllPlayer

:::note[API功能]
说明：获取当前游戏中所有玩家

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @return table | playerIDs | 当前游戏所有玩家ID |

```lua
-- 示例代码
local playerIDs = UDK.Player.GetAllPlayer()
```

### UDK.Player.GetHomeowner

:::caution[API功能]
说明：获取房主玩家

🗃️ 该接口仅`服务端`可用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @return number | playerID | 房主玩家ID |

```lua
-- 示例代码
local homeOwnerID = UDK.Player.GetHomeowner()
print("Homeowner: " .. homeOwnerID)
```

### UDK.Player.GetTotalPlayerCount

:::note[API功能]
说明：获取当前游戏中玩家人数

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @return number | playerCount | 当前游戏玩家人数 |

```lua
-- 示例代码
local totalPlayerCount = UDK.Player.GetTotalPlayerCount()
print("Total Player Count: " .. totalPlayerCount)
```

### UDK.Player.GetLocalPlayerID

:::caution[API功能]
说明：获取本地客户端玩家ID

🗃️ 该接口仅`客户端`可用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @return number | playerID | 本地玩家ID |

```lua
-- 示例代码
local localPlayerID = UDK.Player.GetLocalPlayerID()
print("Local Player ID: " .. localPlayerID)
```

### UDK.Player.GetPlayerNickName

:::note[API功能]
说明：获取玩家昵称

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param playerID | number | 玩家ID |
| @return string | nickName | 玩家昵称 |

```lua
-- 示例代码
local playerID = UDK.Player.GetLocalPlayerID()
local nickName = UDK.Player.GetPlayerNickName(playerID)
print("Player NickName: " .. nickName)
```

### UDK.Player.GetPlayerHeadIcon

:::note[API功能]
说明：获取玩家头像

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param playerID | number | 玩家ID |
| @return string | headIcon | 玩家头像 |

```lua
-- 示例代码
local playerID = UDK.Player.GetLocalPlayerID()
local headIcon = UDK.Player.GetPlayerHeadIcon(playerID)
print("Player HeadIcon: " .. headIcon)
```

### UDK.Player.GetTeamPlayers

:::note[API功能]
说明：获取队伍玩家

🗃️ 该接口服务端和客户端通用
:::

| 传参/返回值 | 类型 | 说明 |
| ---- | ---- | ---- |
| @param teamID | number | 阵营ID |
| @return table | playerIDs | 阵营内所有玩家ID |

```lua
-- 示例代码
local teamID = 1
local playerIDs = UDK.Player.GetTeamPlayers(teamID)
print("Team Players: " .. table.concat(playerIDs, ", "))
```