import { FC } from 'react';
import classes from './Select.module.scss';

interface SelectProps {
  value: number | string;
  size: number;
  options: Array<string | number>;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({value, size, options, onChange}) => {

  return (
    <select
      className={classes.select}
      size={size}
      onChange={onChange}
      value={value}
    >
      {options.map(option =>
        <option 
          value={option}
          className={classes.select__option}
          key={option}
        >
          {option}
        </option>
      )}
    </select>
  );
};

export default Select;