/*# Задача 2

Улучшите класс `Customers` добавив функцию генератор.

**Обратите внимание**:

1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.

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

    *[Symbol.iterator]() {
        for (const item of this._customers) {
            if (item.verified) {
                yield item;
            }
        }
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
