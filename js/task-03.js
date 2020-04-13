const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const input = prompt('Введите пароль');

input
  ? input === ADMIN_PASSWORD
    ? (message = 'Добро пожаловать!')
    : (message = 'Доступ запрещен, неверный пароль!')
  : (message = 'Отменено пользователем!');

alert(message);
