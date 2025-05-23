// Получение элементов
const orderButton_fm = document.getElementById("order-button_fm");
const modal_fm = document.getElementById("modal_fm");
const closeButton_fm = document.querySelector(".close-button_fm");
const dishSelect = document.getElementById("dish");
const quantityInput = document.getElementById("quantity");
const phoneInput = document.querySelector(".phoneMask"); // Получаем поле для телефона
const addressInput = document.getElementById("address");
const confirmButton = document.getElementById("confirm-button");

// Открытие модального окна
orderButton_fm.addEventListener("click", () => {
    modal_fm.style.display = "block"; // Показываем модальное окно
});

// Закрытие модального окна
closeButton_fm.addEventListener("click", () => {
    modal_fm.style.display = "none"; // Закрываем модальное окно
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", (event) => {
    if (event.target === modal_fm) {
        modal_fm.style.display = "none"; // Закрываем модальное окно
    }
});

// Логирование выбранного блюда
dishSelect.addEventListener("change", () => {
    console.log(`Выбрано блюдо: ${dishSelect.value}`); // Логируем выбранное блюдо
});

// Логирование количества
quantityInput.addEventListener("input", () => {
    const quantity = quantityInput.value;
    console.log(`Количество: ${quantity}`); // Логируем количество
});

// Маска для телефона
const mask = new IMask(
    phoneInput,
    { mask: "+{375}(00)000-00-00" }
);

// Пример заполнения адреса
addressInput.addEventListener("focus", () => {
    addressInput.placeholder = "Пример: Улица Пушкина, дом 12, квартира 5"; // Пример заполнения
});

addressInput.addEventListener("blur", () => {
    addressInput.placeholder = "Улица, дом, квартира"; // Возвращаем оригинальный плейсхолдер
});

// Подтверждение заказа
confirmButton.addEventListener("click", () => {
    const dish = dishSelect.value;
    const quantity = quantityInput.value;
    const phone = phoneInput.value; // Получаем значение телефона
    const address = addressInput.value;

    // Проверка на заполненность обязательных полей
    if (phone && address) {
        alert(`Ваш заказ: \nБлюдо: ${dish}\nКоличество: ${quantity}\nТелефон: ${phone}\nАдрес: ${address}`);
        modal_fm.style.display = "none"; // Закрываем модальное окно после подтверждения
        document.getElementById("order-form").reset(); // Сбрасываем форму

    } else {
        alert("Пожалуйста, заполните все обязательные поля."); // Сообщение об ошибке
    }
});
