const country = prompt('Укажите страну доставки');
let price;

const fixedCountry = country[0].toUpperCase() + country.slice(1).toLowerCase();

switch (fixedCountry) {
  case 'Китай':
    price = 100;
    break;

  case 'Чили':
    price = 250;
    break;

  case 'Австралия':
    price = 170;
    break;

  case 'Индия':
    price = 80;
    break;

  case 'Ямайка':
    price = 120;
    break;

  default:
    console.log('В вашей стране доставка не доступна');
}

alert(`Доставка в ${fixedCountry} будет стоить ${price} кредитов`);
