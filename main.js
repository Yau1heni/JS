//users => copy users => change copy => use copy with changes

const user = {
    mame: 'Bob',
    age: 23
} //Литерал объекта
//user - ссылка на объект в памяти

const user2 = user //один объект и две ссылки на него

user.name = 'alex'
console.log(user.name) //alex

console.log({} = {}) //false

// созданме нового объектв {} литерал объекта, new Object(), Object.create

const copyUser = {...user} //spread operator
// Object.assign(), JSON.stringify -> JSON.parse()

const array = [1, 2, 3, 4, 5]
const copyArray = [...array]

const state = [
    {
        id: 1,
        name: 'Alex',
        age: 22,
        address: {}
    },
    {
        id: 2,
        name: 'Ann',
        age: 32,
        address: {}
    },
    {
        id: 3,
        name: 'Max',
        age: 14,
        address: {}
    },
]

//const copyState = state.map(st => ({...st, address: {...st.address}})) //поверхностная копия

const copyState = state.map((st => st.id === 3 ? {...st, name: 'Anna'} : st))
