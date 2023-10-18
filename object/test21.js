// Поиск самого глубокого свойства в объекте
// Задача:
//     Создайте функцию findDeepestProperty(object),
//     которая находит самое глубокое свойство в объекте
//     (самое вложенное). Функция должна вернуть путь к
//     этому свойству в виде строки.

// Исходный объект
const data = {
    name: "Alice",
    details: {
        age: 25,
        address: {
            city: "London",
            postalCode: "SW1A 1AA"
        }
    }
};

// Ваш код здесь

// Ожидаемый результат: "details.address.postalCode"
console.log(deepestProperty);
