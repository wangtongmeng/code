/**
 * 可观察数组
 */
import { observable, autorun } from "mobx"

const todos = observable([
    { title: "Spoil tea", completed: true },
    { title: "Make coffee", completed: false }
])

autorun(() => {
    console.log(
        "Remaining:",
        todos
            .filter(todo => !todo.completed)
            .map(todo => todo.title)
            .join(", ")
    )
})
// 打印: 'Remaining: Make coffee'

todos[0].completed = false
// 打印: 'Remaining: Spoil tea, Make coffee'

todos[2] = { title: "Take a nap", completed: false }
// 打印: 'Remaining: Spoil tea, Make coffee, Take a nap'

todos.shift()
// 打印: 'Remaining: Make coffee, Take a nap'