function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getInt (minInt, maxInt, countInt = 0) {
  if (minInt < 0 || maxInt < 0) {
    return NaN;
  }

  if (maxInt < minInt) {
    const saveInt = maxInt;
    maxInt = minInt;
    minInt = saveInt;
  }

  const floatInt = Math.random() * (maxInt - minInt) + minInt;

  return parseFloat(floatInt.toFixed(countInt));
}

export {getRandomArrayElement, getInt};
