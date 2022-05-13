const fs = require("fs").promises;
const path = require("path");

let rootPath = path.resolve(__dirname, "docs");
let menus = [];
let menusMap = {}; // 后续直接遍历生成import路径用
let id = 0;

const genMenuItemData = (menuPath, isDirectory) => {
  return {
    name: path.basename(menuPath),
    path: path.relative(rootPath, menuPath),
    content: `A${id++}`, // 组件名，A是为了首字母大写
    children: [],
    directory: isDirectory,
  };
};

const genSortedDirs = async (menuPath) => {
  let dirs = await fs.readdir(menuPath, { withFileTypes: true });
  let dirItems = [];
  let fileItems = [];

  dirs.forEach((dir) => {
    dir.isDirectory() ? dirItems.push(dir.name) : fileItems.push(dir.name);
  });
  dirItems = dirItems.sort((a, b) => a.localeCompare(b));
  fileItems = fileItems.sort((a, b) => a.localeCompare(b));

  return dirItems.concat(fileItems);
};

const updateMenuData = (isFirstLevel, parent, info, index) => {
  !isFirstLevel && (menusMap[info.content] = info);

  Array.isArray(parent)
    ? (parent[index] = info)
    : (parent.children[index] = info);
};

// 遍历docs文档生成目录
const genDocMenu = async (menuPath, parent, isFirstLevel, index = 0) => {
  let statObj = await fs.stat(menuPath);
  if (statObj.isDirectory()) {
    let info = genMenuItemData(menuPath, true);
    updateMenuData(isFirstLevel, parent, info, index);
    const sortedDirs = await genSortedDirs(menuPath);

    // 异步并发
    await Promise.all(
      sortedDirs.map((dir, index) =>
        genDocMenu(
          path.join(menuPath, dir),
          isFirstLevel ? parent : info, // // docs层不需要信息，透传数据
          false,
          index
        )
      )
    );

    return Promise.resolve();
  } else {
    // 如果是index.mdx，更新所在目录的path为index.mdx的相对路径
    if (path.basename(menuPath) === "index.mdx") {
      parent.path = path.relative(rootPath, menuPath);
      return;
    }

    let info = genMenuItemData(menuPath, false);
    updateMenuData(isFirstLevel, parent, info, index);
    return Promise.resolve();
  }
};

// 生成MdxHub.tsx文件
const genMdxHub = () => {
  let menusStr = JSON.stringify(menus).replace(
    /"content":"(\w+)"/g,
    (match, p) => {
      return `"content:": ${p}`;
    }
  );

  let importsStr = "";
  Object.keys(menusMap).forEach(
    (key) =>
      (importsStr += `import ${key} from "${menusMap[key].path.replace(
        /\\/g,
        "/"
      )}";\n`)
  );

  fs.writeFile(
    path.resolve(__dirname, "MdxHub.tsx"),
    `
    import React from 'react';
    ${importsStr}
    export const MdxHub = ${menusStr};
  `
  );
};

genDocMenu(rootPath, menus, true)
  .then(() => {
    console.log("menus", JSON.stringify(menus));
    genMdxHub();
  })
  .catch((err) => {
    console.log("err", err);
  });
