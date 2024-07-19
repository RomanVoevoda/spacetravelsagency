import { getComponentClass } from '@/shared/lib';
import './FlexDiv.scss';
import { FC, ReactNode } from 'react';

export interface DivProps {
  direction?: 'row' | 'row_reverse' | 'column' | 'column_reverse';
  justify?: 'justify_start' | 'justify_center' | 'justify_end';
  align?: 'align_start' | 'align_center' | 'align_end';
  children?: ReactNode;
}

const ReverseDiv: FC<DivProps> = ({direction, justify, align, children}) => {
  return (
    <div className={
      getComponentClass('flex', '_', {direction, justify, align})
    }>
      {children}
    </div>
  );
};

export default ReverseDiv;