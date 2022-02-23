// 如果computed的值没有在reactions中用到，那么每次都会计算
import { makeObservable, observable, computed, autorun } from "mobx"

class OrderLine {
    price = 0
    amount = 1

    constructor(price) {
        makeObservable(this, {
            price: observable,
            amount: observable,
            total: computed
        })
        this.price = price
    }

    get total() {
        console.log("Computing...")
        return this.price * this.amount
    }
}

const order = new OrderLine(0)

const stop = autorun(() => {
    console.log("Total: " + order.total)
})
// Computing...
// Total: 0

console.log(order.total)
// (不会重新计算!)
// 0

order.amount = 5
// Computing...
// (无需 autorun)

order.price = 2
// Computing...
// Total: 10

stop()

order.price = 3
// 计算值和 autorun 都不会被重新计算.




// OrderLine 拥有一个计算属性 `total`.
const line = new OrderLine(2.0)

// 如果你在 reaction 之外访问 `line.total`, 那么它每次都会被重新计算.
setInterval(() => {
    console.log(line.total)
}, 1000)