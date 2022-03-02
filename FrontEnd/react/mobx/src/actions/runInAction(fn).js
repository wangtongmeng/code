import { observable, runInAction } from "mobx"

const state = observable({ value: 0 })

runInAction(() => { // 立即调用
    state.value++
    state.value++
})

console.log(state.value) // 2