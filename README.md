# Калькулятор калорий по шагам

Простое React-приложение, которое позволяет рассчитать количество сожженных калорий на основе пройденных шагов и сравнить их с калорийностью различных продуктов.

## Функциональность

- Расчет сожженных калорий на основе количества шагов
- Отображение эквивалентного количества различных продуктов
- Визуальное представление продуктов с помощью эмодзи
- Адаптивный дизайн

## Технологии

- React.js
- CSS Modules
- JavaScript (ES6+)

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/Felag1n/calories-calculator
```

2. Перейдите в директорию проекта:
```bash
cd calories-calculator
```

3. Установите зависимости:
```bash
npm install
```

4. Запустите приложение:
```bash
npm start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Структура проекта

```
calories-calculator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── StepsCaloriesCalculator.jsx
│   │   └── StepsCaloriesCalculator.module.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Как использовать

1. Введите количество пройденных шагов в поле ввода
2. Приложение автоматически рассчитает:
   - Количество сожженных калорий
   - Эквивалентное количество различных продуктов

## Формулы расчета

- Базовый расчет калорий: 1 шаг = 0.04 калории
- Эквивалент продуктов рассчитывается путем деления общего количества сожженных калорий на калорийность одной единицы продукта

## Кастомизация

Вы можете настроить список продуктов, отредактировав массив `foodEquivalents` в файле `StepsCaloriesCalculator.jsx`:

```javascript
const foodEquivalents = [
  { 
    name: 'Название продукта',
    calories: 000,
    icon: '🍔',
    unit: 'шт.'
  },
  // ...
];
```


### Доступные скрипты

- `npm start` - запуск приложения в режиме разработки



## Авторы

Черняев Артём ИСП-225 ; Сырыцин Александр ИСП-212

