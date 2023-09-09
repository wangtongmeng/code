import { getAppChanges } from "../application/app.helpers.js";

// 后续路径变化 也需要走这里， 重新计算哪些应用被加载或者卸载
export function reroute(event) {
  // 获取app对应的状态 进行分类
  const { appsToLoad, appsToMount, appsToUnmount } = getAppChanges()
  console.log('appsToLoad', appsToLoad); 
  // 访问 http://127.0.0.1:8080/#/a [{name: 'a', customProps: {…}, status: 'NOT_LOADED', loadApp: ƒ, activeWhen: ƒ}]
  // 访问 http://127.0.0.1:8080/#/b [{name: 'b', customProps: {…}, status: 'NOT_LOADED', loadApp: ƒ, activeWhen: ƒ}]
}