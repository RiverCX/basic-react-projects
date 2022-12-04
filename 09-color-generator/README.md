# Basic Project: Color Generator

## Live Site

https://react-basic-09-color-generator.netlify.app

## React 知识点

1. `useState`
2. 表单处理、受控组件
3. 模态框

## Values JS

[values.js](https://github.com/noeldelgado/values.js)
all([weight=10])
Generates the tints and shades of the base color as specified by weight.
@param {number} [weight=10]
@return {Array<Values>}

## 效果

1. 输入一个 HEX 颜色值（此处要校验）
2. 展示颜色的 tints 和 shades 分布
3. 色块上的 HEX 数值可以复制，复制后展示模态框

## 实现细节

1. `color` 状态保存受控组件输入的值，`error` 状态保存输入是否错误，`list` 状态存放生成的色阶值
2. 输入值提交时，更新`error` 和 `list`
3. 遍历 `list` 展示色块子组件，子组件维护状态 `alert` 控制模态框是否展示
4. 通过 `navigator.clipboard.writeText(hexValue)` 复制到剪切板
5. 通过 `useEffect` 设置定时器让模态框一段时间后消失
