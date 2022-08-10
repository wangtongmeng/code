import { observable, action } from "mobx"

const state = observable({ value: 0 })

// 在action中修改可观察数据
const increment = action(state => {
    state.value++
    state.value++
})

increment(state) // 手动调用

console.log(state.value) // 2