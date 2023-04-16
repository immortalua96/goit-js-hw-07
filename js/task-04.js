/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
  <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
  </div>
*/
const counter = {
  counterValue: 0,
  decrement() {
    this.counterValue -= 1
  },
  increment() {
    this.counterValue +=1
  }
}

const valueEl = document.querySelector('#value') 
console.dir(valueEl)
const btnDec = document.querySelector('button[data-action="decrement"]')
console.log(btnDec)
const btnInc = document.querySelector('button[data-action="increment"]')
console.log(btnInc)
btnDec.addEventListener('click', function () {
  counter.decrement();
  valueEl.textContent = counter.counterValue
})
btnInc.addEventListener('click', function () {
  counter.increment();
  valueEl.textContent = counter.counterValue
})


// style for container
const containerCounter = document.querySelector('#counter')
containerCounter.style.display = 'flex'
containerCounter.style.gap = '40px'