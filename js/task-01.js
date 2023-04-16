// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
const totalCategories = document.querySelectorAll(".item");
console.log(`В списку ${totalCategories.length} категорій.`);
const categoriesArray = [...totalCategories].forEach( (head) => {
  console.log(`Категорія: ${head.children[0].textContent}
 кількість элементів: ${head.children[1].children.length}`)
});

