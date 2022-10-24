const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

//[массив имен]

/*const getNames = (arr) => {
    const res = []
    const getNewValue = (el) => el.name
    for (let i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i])
        res[i] = newValue
    }
    return res
}
console.log(getNames(students))*/

const easyMap = (arr, fn) => {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = fn(arr[i])
        res[i] = newValue
    }
    return res
}

console.log(easyMap(students, (el) => el.name))
console.log(easyMap(students, (el) => `${el.name}, ${el.age} ${el.scores}`))

console.log(students.map(el => el.name))

const newFilter = (arr, fn) => {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
console.log(newFilter(students, ((el) => el.age < 20)))

const easyFind = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            return arr[i]
        }
    }
}

console.log(easyFind(students, ((el) => el.age < 20)))
console.log(students.find((el) => el.name === 'Alex'))

const easyJoin = (arr, separator = ',') => {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        res += (i < arr.length - 1) ? arr[i] + separator : arr[i]
    }
    return res
}

console.log(easyJoin(['sdgws', 'esfgsd', 'wefs']))
console.log(easyJoin(['sdgws', 'esfgsd', 'wefs'], ' '))