export function findKeyByValue(obj: object, value: any) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);

  return keys[values.indexOf(value)];
}