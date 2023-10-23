console.log("Завдання: 9 ==============================");

function task9() {
 const errorMessage = "Помилка при з'єднанні з сервером";
 function fetchWithError(errorMessage) {
    return Promise.reject(errorMessage);
  };
  fetchWithError(errorMessage).then((value) =>{
    console.log(value);
  }).catch((error) =>{
    console.error(error);
  })

  
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  // Викликаємо функцію fetchWithError
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task10
task9();
