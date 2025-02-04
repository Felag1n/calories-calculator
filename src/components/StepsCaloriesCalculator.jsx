import React, { useState } from 'react';
import styles from './StepsCaloriesCalculator.module.css';

const StepsCaloriesCalculator = () => {
  const [steps, setSteps] = useState('');
  
  const foodEquivalents = [
    { name: 'Гамбургер', calories: 250, icon: '🍔', unit: 'шт.' },
    { name: 'Пицца', calories: 285, icon: '🍕', unit: 'кусков' },
    { name: 'Шоколадный батончик', calories: 230, icon: '🍫', unit: 'шт.' },
    { name: 'Банан', calories: 105, icon: '🍌', unit: 'шт.' },
    { name: 'Яблоко', calories: 95, icon: '🍎', unit: 'шт.' },
    { name: 'Пончик', calories: 195, icon: '🍩', unit: 'шт.' },
    { name: 'Мороженое', calories: 165, icon: '🍦', unit: 'порций' },
    { name: 'Печенье', calories: 140, icon: '🍪', unit: 'шт.' },
    { name: 'Круассан', calories: 235, icon: '🥐', unit: 'шт.' },
    { name: 'Картофель фри', calories: 320, icon: '🍟', unit: 'порций' }
  ];

  // Расчет калорий
  const calculateCalories = (steps) => {
    return Math.round(steps * 0.04);
  };

  // Обновленная функция расчета количества продуктов
  const calculateFoodQuantity = (burnedCalories, foodCalories) => {
    const exactQuantity = burnedCalories / foodCalories;
    // Округляем до ближайшей 0.5
    const roundedQuantity = Math.round(exactQuantity * 2) / 2;
    
    // Если меньше 0.5, возвращаем 0.5
    return roundedQuantity < 0.5 ? 0.5 : roundedQuantity;
  };

  const burnedCalories = calculateCalories(Number(steps));

  // Функция форматирования вывода количества
  const formatQuantity = (quantity) => {
    // Если это целое число, возвращаем без десятичной части
    if (Number.isInteger(quantity)) {
      return quantity.toString();
    }
    // Если это 0.5, форматируем как "½"
    return quantity === 0.5 ? "½" : quantity.toString();
  };

  return (
    <div className={styles.calculator}>
      <h1 className={styles.title}>
        Калькулятор калорий по шагам
      </h1>
      
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Количество шагов:
        </label>
        <input
          type="number"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className={styles.input}
          placeholder="Введите количество шагов"
        />
      </div>

      {steps && burnedCalories > 0 && (
        <div className={styles.result}>
          <p className={styles.resultText}>
            Вы сожгли примерно <span className={styles.calories}>{burnedCalories}</span> калорий
          </p>
          <div className={styles.foodList}>
            <h3>Это эквивалентно:</h3>
            <div className={styles.foodGrid}>
              {foodEquivalents.map((food, index) => {
                const quantity = calculateFoodQuantity(burnedCalories, food.calories);
                return (
                  <div key={index} className={styles.foodGridItem}>
                    <span className={styles.foodIcon}>{food.icon}</span>
                    <div className={styles.foodInfo}>
                      <span className={styles.foodName}>{food.name}</span>
                      <span className={styles.foodCalories}>
                        {formatQuantity(quantity)} {food.unit} ({food.calories} ккал/{food.unit.slice(0, -1)})
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepsCaloriesCalculator;