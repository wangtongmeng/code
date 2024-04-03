
// list和tree的相互转换
// https://juejin.cn/post/6952442048708345863
// 树形结构
const treeData = [
    {
        id:"p1",
        title: '广东',
        children: [{
            id:"p1-1",
            title: '广州',
        }]
    },
    {
        id:"p2",
        title:"四川",
        children:[{
            id:"p2-1",
            title:"成都",
            children: [{
                id:"p2-1-1",
                title:"高新区",
        }]
        },
        {
            id:"p2-2",
            title:"德阳"
        },
        {
            id:"p2-3",
            title:"绵阳"
        }]
    }
]
// list结构
const listData = [
    {
        id:"p1",
        title: '广东',
    },
    {
        id:"p1-1",
        pid: 'p1',
        title: '广州',
    },
    {
        id:"p2",
        title:"四川",
    },
    {
        id:"p2-1",
        pid: 'p2',
        title:"成都",
    },
    {
        id:"p2-2",
        pid: 'p2',
        title:"德阳"
    },
    {
        id:"p2-3",
        pid: 'p2',
        title:"绵阳"
    },
    {
        id:"p2-1-1",
        pid: 'p2-1',
        title:"高新区",
    }
]


// list转tree
// 双层循环
function list2tree(list) {
    list.forEach(child => {
        const pid = child.pid
        if(pid) {
            list.forEach(parent => {
                if(parent.id === pid) {
                // 内层循环，把当前child插入它的father下面
                parent.children = parent.children || []
                parent.children.push(child)
                }
            })
        }
    })
    // 只保留有pid的
    return list.filter(n => !n.pid);
}

// tree转list
// 深度遍历
function tree2list(tree) {
    const list = []
    const stack = [...tree]
    while(stack.length) {
        // 核心一，pop移除这一次操作的node
        const node = stack.pop()
        const children = node.children
        if(children) {
            children.forEach(item => item.pid = node.id);
            // 核心2 把每一个child推到stack里，留着以后用
            stack.push(...children)
        }
        // delete node.children;
        // 把stack里面的拆出来=>打平，放到list里
        list.push(node)
    }
    return list;
}












