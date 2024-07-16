import './FlexDiv.scss';
import { returnFlexDivClass } from './helpers/returnFlexDivClass';
import { DivProps } from './types/types';

const ReverseDiv = (props: DivProps) => {
  return (
    <div className={
      returnFlexDivClass(props) 
    }>
      {props.children}
    </div>
  );
};

export default ReverseDiv;