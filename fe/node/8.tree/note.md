## 当输入url时会做哪些事？ 前端浏览器渲染原理


## OSI 七层模型
送快递：1）准备要发货的内容 2）打包 3）添加寄件信息 4）物流会再次打包 5）找到寄送的地址 6）找到对应的路 7） 拿车送过去

为什么要分层，可以将复杂的逻辑分成几个小的功能来处理 ，复杂的问题简单化。修改变得会比较容易
- 物理层  网线 光纤来传递数据 双绞线 （0,1） 如何表现0.1
- 数据链路层 两个设备直接如何传递   建立逻辑连接的  mac地址  （交换机） 数据帧
- 网络层 寻址进行寻址操作，通过ip找到对应的mac地址可以通信 （路由器）
- 传输层 因为网络层不可靠，保证可靠传输，需要用tcp （对数据的完整性保护）
- 会话层 建立会话 
- 表示层 数据的表示形式、安全性等
- 应用层 用户最终访问的接口

> 下层是为了为上层提供服务的  

> tcp的概念 每一层的协议 -》 (http)

> http://www.zhufengpeixun.com/grow/html/67-1-network.html