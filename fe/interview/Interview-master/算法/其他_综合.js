


// 0 1 1 2 3 5 8...
// 斐波那契数列尾递归
function fibonacci(n) {
    if(n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
}
function fib(n, n1 = 0, n2 = 1) {
    if(n == 0) return 0;
    if(n == 1) return n2;
    return fib(n-1, n2, n1 + n2);
}
// 阶乘
function jiecheng(n) {
    if (n <= 1) {
        return 0;
    }
    return n * jiecheng(n - 1);
}
// 阶乘尾递归
function factorial(num, total=1){   //也可以通过柯里化传入默认值
    if(num<=1){
       return total;
    }
    return factorial(num-1, num*total);
}


// 十进制转二进制
function toBinary(num, predict = 30) {
    if(num === 0) return `${num}`;

    let [n1, n2] = num.toString().split('.');

    // 整数处理
    const arr1 = [];
    n1 = parseInt(n1);
    while(n1 > 1) {
        arr1.push(n1 % 2);
        n1 = n1 >> 1;
    }
    if(n1 === 1) {
        arr1.push(1);
    }
    let result1 = arr1.reverse().join('');

    // 小数处理
    if(!n2) return result1;
    n2 = +('0.' + n2);
    let result2 = '';
    let times = 0;
    while(n2 !== 0 && times < predict) {
        n2 *= 2;
        if(n2 >= 1) {
            result2 += '1'
            n2 -= 1;
        } else {
            result2 += '0'
        }
        times++;
    }

    return result1 + '.' + result2;
}


// 查找路径的题 ↓↓↓ 这个有点恶心,但很重要，很多公司会问
const exampleTree = {
    id: 1,
    children: [{
        id: 2,
        children: [{
            id: 4,
            children: [{
                id: 7,
                children: []
            }]
        }, {
            id: 5,
            children: []
        }]
    }, {
        id: 3,
        children: [{
            id: 6,
            children: [{
                id: 8,
                children: [{
                    id: 10,
                    children: []
                }]
            }, {
                id: 9,
                children: []
            }]
        }]
    }]
}
//例子
// const exampleId = 6 //输入的id
// const exampleResult = { //输出的结果格式
//     path: '1-3-6',
//     leaves: [9, 10]
// }

//主执行函数
function searchTree(tree, id) {
    let res = findNode(tree, id)

    //边界处理，输入的id不存在相对应的节点时
    if (res == undefined) {
        return '在该树的中没有相对应的id的节点'
    }

    res.path.unshift(tree.id)
    let path = res.path.join('-')
    let node = res.node
    let leaves = findLeaves(node)
    return {
        path,
        leaves
    }
}

// 深度遍历查找目标节点及缓存相关路径
function findNode(tree, id) {
    if (tree.id == id) {
        return {
            path: [],
            node: tree
        }
    }

    let res;
    for (let i = 0; i < tree.children.length; i++) {
        res = findNode(tree.children[i], id)
        if (res != undefined) {
            res.path.unshift(tree.children[i].id)
            return res
        }
    }
    return undefined
}

// 递归获取叶子节点
function findLeaves(node) {

    if (node.children.length == 0) {
        return [node.id]
    }
    let leaves = []
    for (let i = 0; i < node.children.length; i++) {
        res = findLeaves(node.children[i])
        leaves = res.concat(leaves)
    }
    return leaves
}
console.log(searchTree(exampleTree, 6));
// 另一种比较好理解的查找路径方法，如下↓↓↓
// catalog是tree
function getPathById(catalog, id, callback){
    //定义变量保存当前结果路径
    let temppath = [];
    // 用try的更好理解，不需要传temppath
    try {
        function getNodePath(node) {
            // 不管对不对先推进去
            temppath.push(node.id);

            //找到符合条件的节点，通过throw终止掉递归
            if (node.id === id) {
                throw ({temppath, node});
            }
            if (node.children && node.children.length > 0) {
                for (let i = 0; i < node.children.length; i++) {
                getNodePath(node.children[i]);
                }
                //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
                temppath.pop();
            } else {
                //找到叶子节点时，删除路径当中的该叶子节点
                temppath.pop();
            }
        }
        getNodePath(catalog);
    } catch (e) {
        callback(e);
    }
}
getPathById(exampleTree, 6, res => {
    // let path = res.path.join('->');
    console.log(res);
});

