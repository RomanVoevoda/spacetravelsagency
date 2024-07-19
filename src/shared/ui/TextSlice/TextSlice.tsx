import { getComponentClass } from '@/shared/lib';
import { FC, ReactNode } from 'react';
import classes from './TextSlice.module.scss';

interface TextSliceProps {
  font?: 'martian' | 'rubik';
  size: 'extra_small' | 'small' | 'normal' | 'big';
  style?: 'italic';
  align?: 'end' | 'center' | 'start';
  indent?: 'small_indent' | 'normal_indent' | 'big_indent';
  children: ReactNode;
}

const TextSlice: FC<TextSliceProps> = (props) => {
  return (
    <p className={
      getComponentClass('text', '_', props, classes)
    }>
      {props.children}
    </p>
  )
}

export default TextSlice