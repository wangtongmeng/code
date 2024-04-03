###[原文](https://www.zoo.team/article/about-react-fiber)

##### React16 架构可以分为三层：

Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入 Reconciler；
Reconciler（协调器）—— 负责找出变化的组件：更新工作从递归变成了可以中断的循环过程。Reconciler 内部采用了 Fiber 的架构；
Renderer（渲染器）—— 负责将变化的组件渲染到页面上。

##### React Fiber 中的时间分片

**[一篇文章](https://juejin.cn/post/7077545184807878692#heading-2)**

**[一篇文章](https://juejin.cn/post/7243450433812070455?searchId=20230817100720B40B0BB2E57E36EB4D0E)**
把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会。
React Fiber 把更新过程碎片化，每执行完一段更新过程，就把控制权交还给 React 负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务
