export function getFromLocalStorage(key) {
  const itemString = localStorage.getItem(key);

  if (!itemString) {
    return [];
  }

  const itemList = JSON.parse(itemString);

  return itemList;
}

export function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
