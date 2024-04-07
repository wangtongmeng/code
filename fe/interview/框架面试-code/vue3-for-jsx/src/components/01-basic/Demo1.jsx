import { defineComponent, ref, reactive } from 'vue'
import Child from './Child'

export default defineComponent(() => {
    const flagRef = ref(true)

    function changeFlag() {
        flagRef.value = !flagRef.value
    }

    const state = reactive({
        list: ['a1', 'b1', 'c1']
    })

    const render = () => {
        return <>
            <p onClick={changeFlag}>demo1 {flagRef.value.toString()}</p>
            {flagRef.value && <Child a={flagRef.value}></Child>}

            <ul>
            {state.list.map(item => <li>{item}</li>)}
            </ul>
        </>
    }
    return render
})

// 1. setup 函数
// 2. 组件的配置
