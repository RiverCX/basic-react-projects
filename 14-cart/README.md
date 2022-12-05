# Basic Project: Cart

## Live Site

https://react-basic-14-cart.netlify.app

## React 知识点

1. `useReduce` 和 `useContext` 全局状态管理

## 效果

1. 商品可以增、减、删除
2. 购物车可以清空
3. 总价格和数量同时更新
4. 初始时有加载页面

## 实现细节

1. 在 `context.js` 中创建 `AppContext`，并在其 Provider 中初始化 reducer
2. 将所有状态封装在一个对象中，使用 `useReducer` 初始化
3. 在 `reducer.js` 中编写数据处理函数
