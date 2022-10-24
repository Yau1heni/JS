const names = ['Bob', 'Alex', 'Donald', 'anna', 999, 'Игорь', 'игорь', '$']
//console.log(names.sort())
//console.log(names)
// 1. Сортирует по  unicode
// 2. Работает муттабельно. Массив сортирует на месте, не создавая новый
// 3. Возвращает ссылку на исходный массив (но уже осортированный)
// 4. sort() часто использует с методом reverse()
// 5. Если нужна копия [...names].sort()
//console.log(names.reverse())
//2,3 также как и для сорт

//const num = [9, 10, 1, 667, 80]
//console.log(num.sort())

const compareFn = (a, b) => a < b ? -1 : 1
// или const compareFn = (a, b) => a - b
//отрицательное число ничего не меняет, а положительное меняет местами
//console.log(num.sort(compareFn))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

const sortedByAge = students.sort((a, b) => a.age - b.age)
//console.log(sortedByAge)
const sByName = students.sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1
)
//console.log(sByName)
const sortLocal = students.sort((a, b) => a.name.localeCompare(b.name))

const num = [12, 54, 63, 47, 55, 99, 11]

for (let j = 0; j < num.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < num.length - 1 - j; i++) {
        if (num[i] > num[i + 1]) {
            isSorted = false;
            //let temp = num[i]
            //num[i] = num[i + 1]
            //num[i + 1] = temp
            [num[i], num[i + 1]] = [num[i + 1], num[i]]
        }
    }
    if (isSorted) break
}

console.log(num)