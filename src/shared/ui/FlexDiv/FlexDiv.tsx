import { getComponentClass } from '@/shared/lib';
import { FC, ReactNode } from 'react';
import classes from './FlexDiv.module.scss';

export interface DivProps {
  direction?: 'row' | 'row_reverse' | 'column' | 'column_reverse';
  justify?: 'justify_start' | 'justify_center' | 'justify_end';
  align?: 'align_start' | 'align_center' | 'align_end';
  children?: ReactNode;
}

const ReverseDiv: FC<DivProps> = (props) => {
  return (
    <div className={
      getComponentClass('flex', '_', props, classes)
    }>
      {props.children}
    </div>
  );
};

export default ReverseDiv;