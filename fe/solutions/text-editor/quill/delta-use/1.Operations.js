import Delta from 'quill-delta';

// insert 可以插入string和embed两种类型
const delta = new Delta([
    // 插入加粗的文字
    { insert: "Text", attributes: { bold: true } },
    // 插入链接
    { insert: "Google", attributes: { link: 'https://www.google.com' } },
    // 插入一个embed 内嵌对象
    {
    insert: { image: 'https://octodex.github.com/images/labtocat.png' },
    attributes: { alt: "Lab Octocat" }
    },
    // Insert another embed
    {
        insert: { video: 'https://www.youtube.com/watch?v=dMH0bHeiRNg' },
        attributes: {
          width: 420,
          height: 315
        }
      }
]);

// console.log(delta.ops)
// [
//     { insert: 'Text', attributes: { bold: true } },
//     { insert: 'Google', attributes: { link: 'https://www.google.com' } },
//     {
//       insert: { image: 'https://octodex.github.com/images/labtocat.png' },
//       attributes: { alt: 'Lab Octocat' }
//     },
//     {
//       insert: { video: 'https://www.youtube.com/watch?v=dMH0bHeiRNg' },
//       attributes: { width: 420, height: 315 }
//     }
//   ]


// 支持链式调用
const delta1 = new Delta();
// insert
// insert(text, attributes)
// insert(embed, attributes)
delta1.insert('Text', { bold: true, color: '#ccc' })
delta1.insert({ image: 'https://octodex.github.com/images/labtocat.png' })
// console.log(delta1.ops)
// [
//   { insert: 'Text', attributes: { bold: true, color: '#ccc' } },
//   {
//     insert: { image: 'https://octodex.github.com/images/labtocat.png' }
//   }
// ]
// 链式调用
const delta2 = new Delta();
delta2
.insert('Text', { bold: true, color: '#ccc' })
.insert({ image: 'https://octodex.github.com/images/labtocat.png' })
console.log(delta2.ops)
// [
//   { insert: 'Text', attributes: { bold: true, color: '#ccc' } },
//   {
//     insert: { image: 'https://octodex.github.com/images/labtocat.png' }
//   }
// ]