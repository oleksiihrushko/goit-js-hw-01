const credits = 23500;
const pricePerDroid = 3000;
let totalPrice;
let message;

const input = prompt('сколько дронов Вы хотите купить?');

if (!input) {
  message = 'Отменено пользователем!';
} else if (input > 0) {
  totalPrice = input * pricePerDroid;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    let restCredits = credits - totalPrice;
    message = `Вы купили ${input} дроидов, на счету осталось ${restCredits} кредитов.`;
  }
} else {
  message = 'Вы ввели неадекватное колличество';
}

// !input
//   ? (massage = 'Отменено пользователем!')
//   : input * pricePerDroid > credits
//   ? (message = 'Недостаточно средств на счету!')
//   : (message = `Вы купили ${input} дроидов, на счету осталось ${
//       credits - input * pricePerDroid4
//     } кредитов.`);

alert(message);
