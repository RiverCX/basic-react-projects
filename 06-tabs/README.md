# Basic Project: Tabs

## Live Site

https://react-basic-06-tabs.netlify.app

## React 知识点

1. `useState` `useEffect` Hook 使用

## 效果

1. 切换 Tab 展示不同的 job experience
2. 数据通过 API 获取，完成获取前展示 loading 页面

## 实现细节

1. `jobs` 状态存放获取的数据，`value` 状态存放当前要展示的数据的索引，`loading` 状态存放获取数据完成的标志
2. 遍历 `jobs` 展示所有的 Tab 按钮，按钮绑定点击事件，点击时改变`value`的值
3. 展示 `value` 对应的 job experience 数据
