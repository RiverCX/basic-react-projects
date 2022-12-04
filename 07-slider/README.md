# Basic Project: Slides

## Live Site

https://react-basic-07-slides.netlify.app/

## React 知识点

1. `useState`
2. `useEffect` 设置和清理定时器、数据更新时的校验

## 效果

1. 展示人物卡片，点击左右可以切换
2. 定时播放下一张卡片

## 实现细节

### CSS

1. Slide 卡片为 position 定位且 opacity 为 0（by default, 所有的卡片叠在一起, 不展示）
2. `activeSlide`类给卡片添加样式：`opacity: 1` `transform: translateX(0)`;
3. `lastSlide`类给卡片添加样式：`transform: translateX(-100%)`
4. `nextSlide`类给卡片添加样式：`transform: translateX(100%)`

### JS

1. `people` 状态保存所有展示数据，`index` 状态保存当前展示卡片信息的索引
2. 使用 `useEffect` 设置间隔定时器递增 `index`，并修正 `index` 的越界问题
3. 左右按钮绑定点击事件，分别递减和递增 `index`
4. 遍历`people`，展示对应的 Slide；遍历时如果索引等于 `index` ，则给展示卡片添加类`activeSlide`；如果索引等于 `index - 1 ` 或 `0` 或 `people.length - 1`，则给展示卡片添加类`lastSlide`；其他索引，给展示卡片添加类`nextSlide`
