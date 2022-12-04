# Basic Project: Menu

## Live Site

https://react-basic-05-menu.netlify.app

## React 知识点

1. `useState` Hook
2. 兄弟组件通信

## 效果

1. 展示所有 Menu 卡片，可以通过 category 筛选 Menu
2. Category 按钮通过数据动态生成

## 实现细节

1. 设置 `menus` 状态，存放**要展示**的 Menu 卡片
2. 设置 `categories` 状态，存放所有的 category
3. 在 Category 子组件中遍历 `categories` ，展示所有的按钮，按钮绑定事件，更新 `menu` 为对应 category 的 `menu`
4. 在 Menu 子组件遍历 `menus` ，展示 Menu 信息
