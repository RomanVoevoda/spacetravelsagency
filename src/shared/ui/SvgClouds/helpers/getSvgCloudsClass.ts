export function getSvgClousClass(position: 'left' | 'center' | 'right'): string | undefined {
  if(position === 'center') return 'clouds clouds_center'
  if(position === 'left') return 'clouds clouds_left'
  if(position === 'right') return 'clouds clouds_right'

  return 'clouds';
}