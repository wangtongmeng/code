// https://github.com/slab/delta
// https://www.npmjs.com/package/quill-delta
import Delta from 'quill-delta';

const delta = new Delta([
    { insert: 'Gandalf', attributes: { bold: true } },
    { insert: ' the ' },
    { insert: 'Grey', attributes: { color: '#ccc' } }
  ]);

console.log(delta.ops)
// [
//     { insert: 'Gandalf', attributes: { bold: true } },
//     { insert: ' the ' },
//     { insert: 'Grey', attributes: { color: '#ccc' } }
//   ]

const death = new Delta().retain(12)
                         .insert('White', { color: '#fff' })
                         .delete(4);

console.log(death.ops)
// [
//     { retain: 12 },
//     { insert: 'White', attributes: { color: '#fff' } },
//     { delete: 4 }
//   ]
const restored = delta.compose(death);
console.log(restored.ops)
// [
//     { attributes: { bold: true }, insert: 'Gandalf' },
//     { insert: ' the ' },
//     { attributes: { color: '#fff' }, insert: 'White' }
//   ]