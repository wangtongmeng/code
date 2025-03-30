import Delta from 'quill-delta';

// compose 组合两个Delta对象，返回一个新的Delta对象。
// compose(other: Delta): Delta;
const compose = () => {
    const a = new Delta().insert('abc');
    const b = new Delta().retain(1).delete(1);

    const composed = a.compose(b);
    console.log(composed.ops);
    // [ { insert: 'ac' } ]
}

// transform(index: numtransformber, priority?: boolean): number;
// transform(other: Delta, priority?: boolean): Delta;
const transform = () => {
    const a = new Delta().insert('a');
    const b = new Delta().insert('b').retain(5).insert('c');

    console.log(a.transform(b, true).ops)
    // [ { retain: 1 }, { insert: 'b' }, { retain: 5 }, { insert: 'c' } ]
    console.log(a.transform(b, false).ops)
    // [ { insert: 'b' }, { retain: 6 }, { insert: 'c' } ]
}


// 将索引与delta进行转换。用于表示光标/选择位置。
// transformPosition(index: number, priority?: boolean): number;
const transformPosition = () => {
    const delta = new Delta().retain(5).insert('a');
    console.log(delta.transformPosition(4)) // 4
    console.log(delta.transformPosition(5)) // 6
}

// compose();
// transform();
transformPosition();

