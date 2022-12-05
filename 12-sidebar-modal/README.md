# Basic Project: Sidebar & Modal

## Live Site

https://react-basic-12-sidebar-modal.netlify.app

## React 知识点

1. `useContext`
2. 自定义 Hook

## 效果

1. 点击 SHOW MODAL 出现顶层的模态框
2. 点击汉堡包按钮 出现 Sidebar

## 实现细节

### CSS

1. 模态框蒙层使用固定定位、初始`z-index`为负；通过添加类样式改变`z-index`
2. Sidebar 使用固定定位，通过`translate()`滑动展示

### JS

1. 建立一个 `context.js` 文件存放 App 组件的 context container，在`Provider`中定义全局状态，并编写自定义 Hook，可以获取全局状态
2. 所有的组件通过自定义 Hook 获取和改变状态
3. Modal 和 Sidebar 组件通过改变状态，来改变样式
