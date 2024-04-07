<template>
    <p @click="changeFlag">Demo {{flagRef}}</p>
    <child a="abc" v-if="flagRef"></child>
    <ul>
        <li v-for="item in state.list" :key="item">{{item}}</li>
    </ul>
</template>

<script>
import { ref, reactive } from 'vue'
import Child from './Child'

export default {
    name: 'Demo',
    components: { Child },
    setup() {
        const flagRef = ref(true)

        function changeFlag() {
            flagRef.value = !flagRef.value
        }

        const state = reactive({
            list: ['a', 'b', 'c']
        })

        return {
            flagRef,
            changeFlag,
            state
        }
    }
}
</script>