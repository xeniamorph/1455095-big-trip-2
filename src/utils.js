import dayjs from 'dayjs';

// function getRandomArrayElement(items) {
//   return items[Math.floor(Math.random() * items.length)];
// }

// function getInt (minInt, maxInt, countInt = 0) {
//   if (minInt < 0 || maxInt < 0) {
//     return NaN;
//   }

//   if (maxInt < minInt) {
//     const saveInt = maxInt;
//     maxInt = minInt;
//     minInt = saveInt;
//   }

//   const floatInt = Math.random() * (maxInt - minInt) + minInt;

//   return parseFloat(floatInt.toFixed(countInt));
// }

// export {getRandomArrayElement, getInt};


const EVENT_DAY_FORMAT = 'MMM D';
const EVENT_DAY_DATATIME_ATTR_FORMAT = 'YYYY-MM-DD';
const EVENT_TIME_FORMAT = 'HH:mm';
const EVENT_TIME_DATATIME_ATTR_FORMAT = 'YYYY-MM-DDTHH:mm';


function getFormattedEventDay(dueDate) {
  return dueDate ? dayjs(dueDate).format(EVENT_DAY_FORMAT) : '';
}

function getFormattedAttrEventDay(dueDate) {
  return dueDate ? dayjs(dueDate).format(EVENT_DAY_DATATIME_ATTR_FORMAT) : '';
}

function getFormattedTimeEvent(dueDate) {
  return dueDate ? dayjs(dueDate).format(EVENT_TIME_FORMAT) : '';
}

function getFormattedAttrDatatimeEvent(dueDate) {
  return dueDate ? dayjs(dueDate).format(EVENT_TIME_DATATIME_ATTR_FORMAT) : '';
}


export { getFormattedEventDay, getFormattedAttrEventDay, getFormattedTimeEvent, getFormattedAttrDatatimeEvent};
