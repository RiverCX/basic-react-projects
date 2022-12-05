# Basic Project: Stripe

## Live Site

https://react-basic-13-stripe.netlify.app

## React 知识点

1. `useContext`
2. `useRef`

## 效果

1. 小屏幕上，点击汉堡包按钮，出现菜单
2. 大屏幕上，鼠标滑动到导航按钮，出现对应的子菜单

## 实现细节

1. 四个组件：Navbar Sidebar Hero Submenu
2. 小屏幕上实现 Toggle 展示 Sidebar:
   - 在 `context.js` 中维护状态 `isSidebarOpen`，方法 `closeSidebar`, `openSidebar`
   - 在 Nav 的汉堡按钮上绑定点击事件，调用 `openSidebar`
   - 在 Sidebar 的关闭按钮绑定点击事件，调用 `closeSidebar`
   - 在 Sidebar 中，获取 `isSidebarOpen` 状态，控制 Sidebar 容器是否展示；在容器中循环遍历数据，展示对应的菜单链接
3. 大屏幕上实现鼠标滑动到导航按钮时，展示 Submenu:
   - 通过获取导航按钮的信息，改变 Submenu 容器的位置和内容
   - 在 `context` 中维护状态 `isSubmenuOpen`, 方法 `closeSubmenu`, `openSubmenu`
   - 在导航按钮上绑定 `mouseover` 事件，调用 `openSubmenu`; 在导航容器上绑定 `mouseover` 事件，判断不是在按钮位置的话，调用 `closeSubmenu`; 在 Hero 的容器上绑定 `mouseover` 事件，调用 `closeSubmenu`
   - 在 Submenu 中，获取 `isSubmenuOpen` 状态，控制 Submenu 容器的展示
   - 在 `context` 中维护状态 `location` 和 `page`
   - 在导航按钮的的回调函数中，添加内容，通过 DOM 方法获取到当前按钮的 center、button 位置和标题，改变 context 中的 `location` 和 `page`
   - 在 Submenu 中，添加 `useEffect` ，根据 `location` 更改 Submenu 容器的 left、top 属性
