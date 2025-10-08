# Plop Generator VS Code 扩展使用指南

## 功能概述
通过VS Code右键菜单快速生成Vue模板，支持在任意目录生成page和component模板。

## 安装方法
扩展已自动安装到：`~/.vscode/extensions/plop-generator`

## 使用方法
1. 在VS Code资源管理器中，右键点击目标文件夹
2. 选择"Generate Template"菜单项
3. 选择模板类型（page/component）
4. 输入模板名称
5. 系统会在当前目录自动生成模板结构

## 支持的功能
- **Page模板**: 生成完整的页面模块，包含index.ts、App.vue和子组件
- **Component模板**: 生成单个Vue组件文件

## 手动命令行使用
```bash

npx plop page

# 生成组件
npx plop component
```

## 注意事项
1. 重启VS Code后扩展生效
2. 确保项目已安装plop依赖：`npm install plop`
3. 右键菜单仅在文件夹上显示