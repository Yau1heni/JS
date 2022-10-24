// изменение состояния -> проверяет наличие подписки(обработчика, слушателель)
// -> это функция (callback) fn => формируется объект {...} event(ev, e) -> fn(e)

const small = document.getElementById('small')
const big = document.getElementById('big')

const handler1 = (e) => console.log('c:', e.currentTarget.id, 't:', e.target.id)
const handler2 = (e) => {
    e.stopPropagation() //отмена всплытия
    if (e.ctrlKey) {
        alert('ctrl')
    }
}
small.onclick =  handler1
small.onclick = null
// только один onclick
small.addEventListener('click', handler1)
small.addEventListener('click', handler2)
small.removeEventListener('click', handler2)
// small.addEventListener('click', (e) => console.dir(e))
// small.removeEventListener('click', (e) => console.dir(e)) новая ссылка на фукцию
// не сработает, так как разные ссылки у функций
big.addEventListener('click', handler1)

const a = document.getElementById('a')
a.addEventListener('click', e => {
    e.preventDefault()
    alert('hi')
})
