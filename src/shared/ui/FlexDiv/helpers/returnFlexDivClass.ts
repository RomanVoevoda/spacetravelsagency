import { DivProps } from "../types/types";

export function returnFlexDivClass(props: DivProps): string {
  let baseClass = 'flex';
  let divClasses = [baseClass];

  if(props.direction) divClasses.push(baseClass + '_' + props.direction);
  if(props.justify) divClasses.push(baseClass + '_justify_' + props.justify);
  if(props.align) divClasses.push(baseClass + '_align_' + props.align);

  return divClasses.join(' ');
}