# Basic Project: Navbar

## Live Site

https://react-basic-11-navbar.netlify.app

## React 知识点

1. `useRef`
2. `useEffect`

## 效果

1. 小屏幕上使用 Toggle 出现导航栏
2. 大屏幕上隐藏 Toggle，直接显示导航栏和图标
3. 导航和图标根据数据动态生成

## 实现细节

### CSS

1. 先设计小屏幕，再设计大屏幕
2. 小屏幕的 Toggle 的实现：导航容器的样式设置为`height: 0px` `overflow: hidden` 默认不展示；通过 JS 来增加容器`height`的高度展示导航块
3. 大屏幕时 Toggle 图标的样式为`display: none`，导航块容器样式改为`height: auto`

### JS

1. 状态 `showLinks` 控制小屏幕上的导航的展示，通过点击 Toggle 按钮改变值
2. 遍历数据展示所有的导航，给导航块和它的容器设置 `ref`
3. Toggle 的实现：通过 `useEffect` 在`showLinks`改变时，改变容器`height`的高度；通过 `useRef` 和 `getBoundingClientRect` 获取导航块的高度，把容器高度设置为一致
