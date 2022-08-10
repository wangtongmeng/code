function createHashHistory() {
    // 历史栈
    let historyStack = []
    // 栈顶指针
    let historyIndex = -1
    // 动作类型
    let action = 'POP'
    // 路径中的状态
    let state // 暂存state
    // 存放所有的监听函数
    let listeners = []
    function go(N) {
        action = 'POP'
        historyIndex += N
        let nextLocation = historyStack[historyIndex]
        state = nextLocation.state
        window.location.hash = nextLocation.pathname
    }
    function goBack() {
        go(-1)
    }
    function goForward() {
        go(1)
    }
    /**
     * 添加路径（跳转路径）
     * @param {*} pathname 路径名，可能是字符串，也可能是{pathname,state}
     * @param {*} nextState 
     */
    function push(pathname, nextState) {
        action = 'PUSH'
        if (typeof pathname === 'object') {
            state = pathname.state
            pathname = pathname.pathname
        } else {
            state = nextState
        }
        // 修改hash之后会触发hashchange
        window.location.hash = pathname
    }
    function hashChangeHandler() {
        let pathname = window.location.hash.slice(1)
        Object.assign(history, { action, location: { pathname, state } })
        if (action === 'PUSH') {
            historyStack[++historyIndex] = history.location
        }
        listeners.forEach(listener => listener({ location: history.location, action: history.action }))
    }
    window.addEventListener('hashchange', hashChangeHandler)
    function listen(listener) {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter(item => item !== listener)
        }
    }

    const history = {
        action: 'POP',
        go,
        goBack,
        goForward,
        push,
        listen,
        location: { pathname: window.location.pathname, state: window.location.state }
    }
    if (window.location.hash) {
        action = 'PUSH'
        hashChangeHandler()
    } else {
        window.location.hash = '/'
    }
    return history
}

export default createHashHistory