const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
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
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

/*const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}*/


//1. Создайте поверхностную копию объекта user
let copyUser;
copyUser = {...user}

//Проверка:
//console.log(user===copyUser)
//console.log(user.friends===copyUser.friends)

//2. Полная (глубокая) копия объекта user
let deepCopyUser;
deepCopyUser = {...user, friends: [...user.friends]}

//Проверка:
// console.log(user===deepCopyUser)
// console.log(user.friends===deepCopyUser.friends)

//3. Поверхностная копия массива students
let copyStudents;
copyStudents = [...students]

//Проверка:
//console.log(copyStudents === students) //false
//console.log(copyStudents[0] === students[0]) //true

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents;
deepCopyStudents = students.map(el => ({...el}))

//Проверка:
//console.log(deepCopyStudents===students) //false
//console.log(deepCopyStudents[0] === students[0]) //false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName;
sortedByName = [...deepCopyStudents].sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1)
//console.log('sortedByName' ,sortedByName);
//console.log('deepCopyStudents not sorted', deepCopyStudents);


//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores;
sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores)
console.log('sortedByScores', sortedByScores);
console.log('deepCopyStudents sorted scores', deepCopyStudents)

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents;
bestStudents = students.filter(s => s.scores >= 100)
console.log('bestStudents', bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents;
topStudents = deepCopyStudents.splice(0, 3)
console.log('topStudents', topStudents)
console.log(' slice deepCopyStudents', deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents;
newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log('newDeepCopyStudents', newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents;
notMarriedStudents = students.filter(el => !el.isMarried)
console.log('notMarriedStudents', notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames;
studentsNames = students.map(el => el.name)
console.log('studentsNames', studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace;
namesWithSpace = studentsNames.join(' ')
console.log('namesWithSpace', namesWithSpace)
let namesWithComma;
namesWithComma = studentsNames.join(', ')
console.log(namesWithComma, namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents;
trueStudents = students.map(el => ({
    ...el, isStudent: true
}))
console.log('trueStudents', trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick;
studentsWithMarriedNick = students.map(el => el.name === 'Nick' ? ({...el, isMarried: true}) : el)
console.log('studentsWithMarriedNick', studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann;
ann = students.find(el => el.name === 'Ann')
console.log(ann)

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent;
bestStudent = students.reduce((maxScore, currentValue) => maxScore.scores < currentValue.scores ? currentValue : maxScore)
console.log(bestStudent)

let newBestStudent = []
let student = 0
for (let i = 1; i < students.length; i++) {
    if (student < students[i].scores) {
        student = students[i].scores
        newBestStudent = students[i];
    }
}
console.log('newBestStudent', newBestStudent)


//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum;
scoresSum = students.reduce(((acc, curr) => acc + curr.scores), 0)
console.log('scoresSum', scoresSum)


/*const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },

];*/

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    const studentsName = students.map(n => n.name)
    return students.map(el => ({...el, friends: studentsName.filter(n => n !== el.name)}))
    //..............................
}
console.log('!', addFriends(students));
// 15. Напишите функцию getBestStudents, которая принимает параметром массив
// students  и количество лучших студентов, которое надо получить в
// новом массиве.
// если параметр количество лучших студентов больше, чем есть студентов на самом деле
// заполнить получившийся массив имеющимися студентамиб оставшиеся места должны быть null
// getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// getBestStudents(students, 3)
// getBestStudents(students, 10)

const getBestStudents = (students, n = 1) => {
    const sortedArray = students.sort((a, b) => b.scores - a.scores)
    if (n < students.length) {
        return sortedArray.splice(0, n)
    } else {
        const arrayWithNull = new Array(n-students.length).fill(null)
        return [...sortedArray, ...arrayWithNull]
    }

}

console.log(getBestStudents(students, 8))






