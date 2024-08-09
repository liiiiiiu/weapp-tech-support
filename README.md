# Weapp Tech Support

🌞 微信小程序技术支持自定义组件

> 更多微信小程序开发工具，查看 [微信小程序开发全家桶](https://www.liiiiiiu.com/dev/weapp-dev-bucket)

## 安装

```bash
npm i weapp-tech-support
```

> 注意：在小程序中使用npm包前，需先[构建 npm](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

## 使用

| property | 类型  | 描述 |
|  ----  | ----  | ----  |
| image | String | 企业Logo |
| name | String | 企业名称 |
| useCustomContent | Boolean | 是否启用自定义插槽，默认为 false |
| customStyle | String | 自定义样式 |

```javascript
// index.json

{
  "component": true,
  "usingComponents": {
    "tech-support": "weapp-tech-support/TechSupport/TechSupport"
  }
}
```

```html
<!-- index.wxml -->

<tech-support
  image=""
  name="xx科技"
/>
```
