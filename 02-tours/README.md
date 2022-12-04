# Basic Project: Tour Cards

## Live Site

https://react-basic-02-tours.netlify.app/

## React 知识点

1. `useState`Hook 以及**状态提升**
2. 父组件和子组件最基础的通信方式

## 效果

1. 展示所有的 Tour 信息卡片
2. 点击卡片 Not Interested 删除信息卡片
3. 所有卡片为空时点击 Refresh 重新加载
4. 通过 API 获取信息时展示 Loading 页面
5. 卡片信息有一个 read more/show less 的 Toggle 按钮

## 实现细节

1. 设置`loading`状态，默认为`true`，fetch 信息成功后改为`false`
2. 设置`tours`状态，存放旅游卡片信息
3. 判断`loading`和`tours`的状态，返回加载页面、刷新页面和信息页面
4. 当点击卡片的 Not Interested 按钮时，根据卡片 ID 删除该卡片信息并更新`tours`
5. 卡片组件设置`readMore`状态，通过按钮进行 toggle(值取反)，改变展示的文本和按钮值
