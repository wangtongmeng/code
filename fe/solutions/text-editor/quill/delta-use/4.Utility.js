import Delta from 'quill-delta';

// filter  过滤操作
//  filter(predicate: (op: Op, index: number) => boolean): Op[];
const filter = () => {
    const delta = new Delta().insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');
    console.log(delta.ops)
    // [
    //     { insert: 'Hello', attributes: { bold: true } },
    //     {
    //       insert: { image: 'https://octodex.github.com/images/labtocat.png' }
    //     },
    //     { insert: 'World!' }
    //   ]

    const text = delta
        .filter((op) => typeof op.insert === 'string')
    console.log(text);
    // [
    //     { insert: 'Hello', attributes: { bold: true } },
    //     { insert: 'World!' }
    // ]
}

// 遍历 ops
// forEach(predicate: (op: Op, index: number) => void): void;
const forEach = () => {
    const delta = new Delta().insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');
    delta.forEach((op) => {
        console.log(op);
    });
    // { insert: 'Hello', attributes: { bold: true } }
    // { insert: { image: 'https://octodex.github.com/images/labtocat.png' } }
    // { insert: 'World!' }
}


// 返回 所有ops的内容的长度和，包括删除操作，内嵌对象长度计算为1
// length(): number;
const length = () => {
    console.log(new Delta().insert('Hel').insert('lo').length()) // 5
    console.log(new Delta().insert('A').retain(2).delete(1).length()) // 4
    const delta = new Delta()
        .insert('a', { bold: true })
        .insert({ image: 'url' })
        .insert('b');
    console.log(delta.length()) // 3
}

// map<T>(predicate: (op: Op, index: number) => T): T[];
const map = () => {
    const delta = new Delta().insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');

    const text = delta
        .map((op) => {
            if (typeof op.insert === 'string') {
                return op.insert;
            } else {
                return '';
            }
        })
    console.log(text) // [ 'Hello', '', 'World!' ]

}
// 分类
// partition(predicate: (op: Op) => boolean): [Op[], Op[]];
const partition = () => {
    const delta = new Delta().insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');

    const results = delta.partition((op) => typeof op.insert === 'string');
    const passed = results[0];  // [{ insert: 'Hello', attributes: { bold: true }},
    //  { insert: 'World'}]
    const failed = results[1];  // [{ insert: { image: 'https://octodex.github.com/images/labtocat.png' }}]
    console.log(passed)
    console.log(failed)
}

// reduce<T>(predicate: (accum: T, curr: Op, index: number) => T, initialValue: T): T;
const reduce = () => {
    const delta = new Delta().insert('Hello', { bold: true })
        .insert({ image: 'https://octodex.github.com/images/labtocat.png' })
        .insert('World!');

    const length = delta.reduce((length, op) => (
        length + (op.insert.length || 1)
    ), 0);
    console.log(length) // 12
}

// slice(start?: number, end?: number): Delta;
const slice = () => {
    const delta = new Delta().insert('Hello', { bold: true }).insert(' World');


    const copy = delta.slice();
    console.log(copy.ops);
    // [
    //     { attributes: { bold: true }, insert: 'Hello' },
    //     { insert: ' World' }
    // ]

    const world = delta.slice(6);
    console.log(world.ops);

    const space = delta.slice(5, 6);
    // [{ insert: 'World' }]
    console.log(space.ops);
    // [{ insert: ' ' }]
}
// filter();
// forEach();
// length();
// map();
// partition();
// reduce();
slice();

