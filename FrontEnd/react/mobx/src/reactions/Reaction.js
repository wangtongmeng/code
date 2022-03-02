// Reaction比autorun更加精细
import { makeAutoObservable, reaction, autorun } from "mobx"

class Animal {
    name
    energyLevel

    constructor(name) {
        this.name = name
        this.energyLevel = 100
        makeAutoObservable(this)
    }

    reduceEnergy() {
        this.energyLevel -= 10
    }

    get isHungry() {
        return this.energyLevel < 50
    }
}

const giraffe = new Animal("Gary")

reaction(
    () => giraffe.isHungry,
    isHungry => {
        if (isHungry) {
            console.log("Now I'm hungry!")
        } else {
            console.log("I'm not hungry!")
        }
        console.log("Energy level:", giraffe.energyLevel)
    }
)


// autorun(() => {
//   if (giraffe.isHungry) {
//       console.log("Now I'm hungry!")
//   } else {
//       console.log("I'm not hungry!")
//   }
// })
// 用autorun的话 会先执行一次
// I'm not hungry! 
// Now let's change state!
// Now I'm hungry!

console.log("Now let's change state!")
for (let i = 0; i < 10; i++) {
    giraffe.reduceEnergy()
}

/**
Now let's change state!
Now I'm hungry!
Energy level: 40
 */

