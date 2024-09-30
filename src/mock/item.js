import { getRandomArrayElement, getInt } from '/src/utils.js';
import {
  STOPPINGS,
  TRANSPORTS,
  TYPES,
  OFFERS,
  DESTINATION,
  FAVORITE,
  DATES_FROM,
  DATES_TO,
  TIME_FROM,
  TIME_TO
} from '/src/const.js';

// Обязательно выделите дополнительные опции и пункт назначения в отдельные структуры данных:
// тип, название и цена — для опций;
// описание, название города и фотографии — для пункта назначения.
// Не копируйте одну структуру в другую, вместо этого свяжите их друг с другом по ключу.

const ITEM_COUNT = 10;

const mockItems = () => {
  const itemArray = [];
  for (let i = 0; i < ITEM_COUNT; i++) {
    const randomCountOfOffer = getInt(0, 3);
    const randomOfferArray = Array.from({length: randomCountOfOffer}, () => getRandomArrayElement(OFFERS));

    itemArray.push({
      'base_price': getInt(0, 1000),
      'date_from': getRandomArrayElement(DATES_FROM),
      'date_to':getRandomArrayElement(DATES_TO),
      'time_from': getRandomArrayElement(TIME_FROM),
      'time_to':getRandomArrayElement(TIME_TO),
      'destination': getRandomArrayElement(DESTINATION),
      'is_favorite': getRandomArrayElement(FAVORITE),
      'offers': randomOfferArray,
      'type': getRandomArrayElement(TYPES),
      'stopping': getRandomArrayElement(STOPPINGS),
      'transport': getRandomArrayElement(TRANSPORTS),
    });
  }

  console.log(itemArray);
};

mockItems();

console.log(mockItems());
