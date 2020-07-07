# code-dance

代码演示工具，突出代码改动部分。

会对比前后传入的代码片段，尽量保留未改动的代码段，移除不存在的代码段，添加新的代码段。

![code-dance](https://user-images.githubusercontent.com/8131019/86697636-271f6e80-c041-11ea-877a-6246ead0688f.gif)

## 体验

```
git clone https://github.com/coconilu/code-dance.git
yarn
yarn dev
```

浏览器将会打开演示页面。

## Props

| prop | type | description |
| :---: | --- | --- |
| code | string | 代码片段 |
| containerStyle | object | 外层容器样式，将会和内部样式合并 |

## Todos

1. [ ] 解析前后代码，标记代码类型，比如新增、移除、遗留
2. [ ] 添加更多的动效，满足不同场景
3. [ ] 提供更细腻的操作动画队列的API
