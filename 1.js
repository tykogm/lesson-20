/*# Задача 1

Создайте класс `Customers` который умеет работать с механизмом `for of`.

Класс `Customers` содержит метод `add` который принимает объект в качестве параметра.
    У этого объекта есть обязательное поле `name` и необязательное поле `verified`.

Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

**Обратите внимание**:

1. Использование генераторов **запрещено**.
2. Использование посторонних библиотек **запрещено**
3. У класса `Customers` **должен** быть метод `Symbol.iterator`

Пример использования:

```javascript*/
class Customers {
    constructor() {
        this._customers= [];
    }

    add(param) {

        if (!param || !param.name || typeof param.name !== "string") {
            throw new Error("Invalid parameter name in add function");
        }
        if (param.verified && typeof param.verified !== "boolean") {
            throw new Error("Invalid parameter verified in add function");
        }

        this._customers.push(param);
    }

    [Symbol.iterator]() {
        let i = 0;

        // логика....

        return {
            next: () => {

                function _next(customers) {
                    const done = i >= customers.length;
                    const value = !done ? customers[i++] : undefined;

                    return {
                        done,
                        value,
                    };
                }

                const res = _next(this._customers);
                if (res.done || res.value.verified) {
                    return res;
                } else {
                    return _next(this._customers);
                }

            },
        };
    }
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
//{ name: 'Andrii', verified: true }
//{ name: 'Marco', verified: true }
//{ name: 'Lisa', verified: true }
//{ name: 'Ivan', verified: true }
