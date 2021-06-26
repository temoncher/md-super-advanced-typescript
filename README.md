## Presentation link
https://docs.google.com/presentation/d/1h_DBNZ9YvWpRv9oG6AjJbdJAAmNxotXb3HJzf2X8moc/edit?usp=sharing

## Homework
1. Создать ветку `super-advanced-typescript` от главной ветки вашего тестового проекта
2. Создайте файл `src/type-exercises/concat.ts`, и напишите generic тип `Concat`, который принимает два аргумента:
    - Аргументы должны быть ограничены так, чтобы передать в тип можно было только массивы
    - На выход вы должны получить массив, состоящий из элементов первого массива и элементов второго массива
    Пример:
    ```ts
    type Result1 = Concat<[1], [2]>; // expected to be [1, 2]
    type Result2 = Concat<['classic'], ['peach breeze', 'bitburger']>; // expected to be ['classic', 'peach breeze', 'bitburger']
    type Result3 = Concat<[], [3]>; // expected to be [3]
    ```
3. Создайте файл `src/type-exercises/if.ts`, и напишите generic тип `If`, который принимает три аргумента:
    - Первый должен быть булевым
    - Второй и третий не ограничены
    - На выход вы должны получить второй тип, если первым аргументом пришел `true` и третий тип, если первым аргументом пришел `false`
    Пример:
    ```ts
    type Classic = If<true, 'classic', 'bitburger'>;  // expected to be 'classic'
    type Bitburger = If<false, 'classic', 'bitburger'>; // expected to be 'bitburger'
    ```
4. Создайте файл `src/type-exercises/trim.ts`, и напишите generic тип `Trim`, который принимает один аргумент:
    - Аргумент должен быть строкой
    - На выход вы должны получить ту же самую строку, но пробелы по бокам должны быть отброшены
    Пример:
    ```ts
    type Trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
    ```
5. Прочитайте это https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
   Создайте файл `src/type-exercises/omit.ts`, и напишите generic тип `CustomOmit`, который принимает два аргумента:
    - Первый аргумент - объект, второй аргумент - список названий пропсов, которые нужно исключить из первого объекта
    - На выход должен выдавать то же самое, что выдает коробочный `Omit`
    Пример:
    ```ts
    interface Burger {
      name: string;
      numberOfSlices: number;
      meat: string;
    }

    type VeganBurger = CustomOmit<Burger, 'numberOfSlices' | 'meat'> // expected to be { name: string }
    ```