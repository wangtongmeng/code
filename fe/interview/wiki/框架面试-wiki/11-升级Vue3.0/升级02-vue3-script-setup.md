# vue3 script setup

vscode 插件 禁用 `Vetur` 下载 `Volar`

## 准备环境

vue-cli 创建项目之后，升级到 3.2 版本，重新安装即可 `yarn add vue@next`

## 基本使用

- 顶级变量，可以直接用于模板中
- 引入的组件，可以直接用于模板中
- 使用 ref reactive 等 vue3 功能

和其他 script 使用

- 没有 return 和 exports ，需要适应
- script 和 template 位置调换，这样更易阅读

## 属性和事件

- defineProps
- defineEmits

## defineExpose

向父组件暴露数据

------

setup script 中不能使用 jsx
