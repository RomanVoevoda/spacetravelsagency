export function getComponentClass(
    baseClass:string, 
    glue: string, 
    props: object
  ): string {

  if('children' in props) {
    throw new Error('Ошибка! В функцию getComponentClass нельзя передавать пропс children')
  }

  let accumulator = [baseClass];
  let values = Object.values(props);

  for(let i = 0; i < values.length; i++) {
    if(values[i]) {
      accumulator.push(baseClass + glue + values[i]);
    }
  }

  return accumulator.join(' ');
}