import { Extension } from '@tiptap/core';

export const UpdateCounter = Extension.create({
  name: 'updateCounter',

  addStorage() {
    return {
      count: 0, // 初始化存储
    };
  },

  onUpdate() {
    this.storage.count += 1; // 在每次更新时修改存储
    console.log('Editor updated', this.storage.count, 'times.');
  },
});
