// Подсчет свойств вложенных объектов
// Задача:
//     Создайте функцию countNestedProperties(object),
//     которая принимает объект и возвращает количество всех свойств,
//     включая вложенные объекты. Если свойство само является
//     объектом, его вложенные свойства также учитываются.

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

// Ожидаемый результат: 6
console.log(propertyCount);
