/*
Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];
let idSelector = '#ingredients'

function addlist (array) {
  const list = document.querySelector(idSelector)
  const liArray = []

  array.forEach(ingredient => {
    const item = document.createElement('li')
    item.className = 'item'
    item.textContent = ingredient
    liArray.push(item)
    console.log(item)
  })

  list.append(...liArray)
}
addlist(ingredients)


