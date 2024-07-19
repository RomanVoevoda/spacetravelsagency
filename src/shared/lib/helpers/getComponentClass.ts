export function getComponentClass(
    baseClass:string, 
    glue: string, 
    props: Record<string, any>,
    classes: Record<string, string>
  ): string {

  let filteredProps = Object.keys(props)
                            .filter(key => key != 'children')
                            .reduce((acc, key) => { acc[key] = props[key]; return acc;}, {} as Record<string, any>);

  let accumulator = [classes[baseClass]];
  let values = Object.values(filteredProps);

  for(let i = 0; i < values.length; i++) {
    if(values[i]) {
      accumulator.push(classes[baseClass + glue + values[i]]);
    }
  }

  return accumulator.join(' ');
}