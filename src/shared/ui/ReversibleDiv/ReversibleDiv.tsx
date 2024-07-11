import { ReactNode } from 'react';
import classes from './ReversibleDiv.module.scss';

interface DivProps {
  type: string;
  children?: ReactNode;
}

const ReverseDiv = ({type, children}: DivProps) => {
  return (
    <div className={
      type == 'column' 
      ? 
      classes.reversible__column 
      : 
      classes.reversible__row}
    >
      {children}
    </div>
  );
};

export default ReverseDiv;