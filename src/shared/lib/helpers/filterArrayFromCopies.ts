export function filterArrayFromCopies<T>(arr: T[], filter: keyof T): T[]{
  let arrCopy: T[] = [];

  arr.forEach(item => {
    if( !arrCopy.find(existItem => existItem[filter] === item[filter]) ) arrCopy.push(item);
  })

  return arrCopy;
}