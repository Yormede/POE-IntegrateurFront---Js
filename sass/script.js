const tabFruits = ['banana', 'apple', 'apple', 'kiwi', 'orange']

let result = []
tabFruits.forEach((x, index) => {
    let  rep = 0
    const tabInstance = tabFruits.map((y) => y)
    tabInstance.pop(x)
    console.log(tabInstance)
    tabInstance.forEach((y) => {
        console.log(x);
        if (x === y) {
            rep ++
            result.push(`${x} est en ${rep} fois`)
        }
        // x === y ? console.log(`${x} est en doublon`): null
    })
    console.log(rep, result)
})

const liste = [1, 2, 3, 4]

let a, b, c ;
[a, b, c] = liste

console.log(a, b, c)