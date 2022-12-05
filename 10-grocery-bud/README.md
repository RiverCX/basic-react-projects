# Basic Project: Grocery Bud

## Live Site

https://react-basic-10-grocery-bud.netlify.app

## React 知识点

1. 父组件和子组件通过状态提升通信
2. 使用 `useEffect` 更新数据
3. 受控组件
4. 模态框

## 效果

1. 添加项、删除项、清空所有项
2. 编辑项，此时旧值会自动填入输入框
3. 所有操作成功后会在顶部出现一个限时的模态框
4. 数据保存在 local storage 中

## 实现细节

### 数据存取

1. 状态 `list` 初始化时从 local storage 获取数据
2. 使用 `useEffect` 在 `list` 更新时存在本地 local storage

### 状态

1. `list` 状态存放所有的项
2. `title` 状态存放受控输入框的值
3. `isEditing` 状态存放编辑状态，控制按钮显示 Submit / Edit
4. `editID` 状态存放编辑项的 ID
5. `alert` 存放传递给模态框组件的数据

### 注意事项

1. 要考虑 `list` 为空的情况
2. 模态框组件使用 `useEffect` 开启了一个定时器，在 3s 后设置 `alert` 为 `false`，需要将 dependency 设置为 `list`，否则如果在 3s 内又出现其他操作，并不会等待完整的 3s 再消失
