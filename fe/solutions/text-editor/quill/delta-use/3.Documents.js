import Delta from 'quill-delta';

// concat 连接两个 Delta，返回一个新的 Delta
const a = new Delta().insert('Hello');
const b = new Delta().insert('!', { bold: true });

const concatCase = () => {
    console.log(a.ops)
    console.log(b.ops)
    // [ { insert: 'Hello' } ]
    // [ { insert: '!', attributes: { bold: true } } ]
    const concat = a.concat(b);
    console.log(concat.ops)
    // [ { insert: 'Hello' }, { insert: '!', attributes: { bold: true } } ]
}


const diffCase = () => {
    // diff
    // diff(other: Delta, cursor?: number | diff.CursorInfo): Delta;

    
    const a = new Delta().insert('Hello');
    // Delta { ops: [ { insert: 'Hello' } ] }
    const b = new Delta().insert('Hello!');
    // Delta { ops: [ { insert: 'Hello!' } ] }

    const diff = a.diff(b);  // 从a到b需要的操作
    // Delta { ops: [ { retain: 5 }, { insert: '!' } ] }

    console.log(a.compose(diff))
    // Delta { ops: [ { insert: 'Hello!' } ] }
} 

// 按行遍历 Delta
const eachLineCase = () => {
    const delta = new Delta().insert('Hello\n\n')
        .insert('World')
        .insert({ image: 'octocat.png' })
        .insert('\n', { align: 'right' })
        .insert('!');
    delta.eachLine((line, attributes, i) => {
        console.log(line.ops, attributes, i);
        // [ { insert: 'Hello' } ] {} 0
        // [] {} 1
        // [ { insert: 'World' }, { insert: { image: 'octocat.png' } } ] { align: 'right' } 2
        // [ { insert: '!' } ] {} 3
    });
}

// 反转操作
const invert = () => {
    const base = new Delta().insert('Hello\n')
        .insert('World');
    console.log(base.ops) // [ { insert: 'Hello\nWorld' } ]
    const delta = new Delta().retain(6, { bold: true }).insert('!').delete(5);
    console.log(delta.ops)
    // [
    //     { retain: 6, attributes: { bold: true } },
    //     { insert: '!' },
    //     { delete: 5 }
    // ]

    const inverted = delta.invert(base);
    console.log(inverted.ops);
    // [
    //     { retain: 6, attributes: { bold: null } },
    //     { insert: 'World' },
    //     { delete: 1 }
    //   ]
    // base经过delta操作，想要还原到base，需要执行inverted操作
    console.log(base.compose(delta).compose(inverted).ops) // [ { insert: 'Hello\nWorld' } ]
};

// concatCase();
diffCase();
// eachLineCase();
// invert();

