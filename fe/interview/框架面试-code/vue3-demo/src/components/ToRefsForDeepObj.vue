<template>
    <p>{{loves.eat}} - {{list[2]}}</p>
</template>

<script>
import { ref, toRef, toRefs, reactive } from 'vue'

function test() {
    const obj = reactive({
      id: '1',
      gender: "男",
      loves: {
        eat: "apple",
        sleep: "now"
      },
      list: ["a","mm","c","d"]
    })

    return toRefs(obj)
}

export default {
    name: 'ToRefsForDeepObj',
    setup() {
        const { loves, list } = test()

        setTimeout(() => {
            loves.value.eat = 'banana'
            list.value[2] = 'xxx'
        }, 1500)

        return {
            loves,
            list
        }
    }
}
</script>