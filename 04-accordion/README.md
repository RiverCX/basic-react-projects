# Basic Project：Accordion

## Live Site

https://react-basic-04-accordion.netlify.app/

## React 知识点

1. `useState` Hook
2. [react icons](https://react-icons.github.io/react-icons/)

## 效果

1. 展示所有问题卡片，每个卡片有一个 toggle 按钮，用于展开和折叠信息

## 实现细节

1. 遍历数据展示所有卡片组件
2. 在卡片组件中维护一个 `open` 状态，通过按钮进行 toggle，切换文本展示和按钮的图标
3. 展示信息时使用短路运算符`&&`: `open && <p>{text}</p>`
