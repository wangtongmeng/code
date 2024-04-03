// 1. 父元素要设置 position: relative 子元素的offsetTop才能做为滚动的参考

// 2. 点击事件触发滚动，滚动到父元素的scrollTop===目标的offsetTop
const handleIndicatorTypeClick = () => {
  const target = document.getElementById(type);
  if (!target) return;
  const parentElement = target.parentElement;
  if (!parentElement) return;

  parentElement.scrollTop = target.offsetTop;
};

export const isElementInView = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return false;
  const parentElement = element.parentElement;
  if (!parentElement) return false;

  const OFFSET = 50;
  return Math.abs(parentElement.scrollTop - element.offsetTop) <= OFFSET;
};
