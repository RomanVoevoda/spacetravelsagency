import { FC } from 'react';
import classes from './ThemeSwitcher.module.scss';
import { changeColorsTheme } from '../lib/helpers/changeColorsTheme';
import { useColorsTheme } from '../lib/hooks/useColorsTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher: FC = () => {
  const { colorsTheme, setColorsTheme, appClasses } = useColorsTheme();

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); 
        changeColorsTheme(colorsTheme, setColorsTheme, appClasses);
      }}
      className={classes.themeSwitcher}
    >
      <span className={
        colorsTheme === appClasses.dark 
        ? 
        classes.themeSwitcher__container_dark 
        : 
        classes.themeSwitcher__container_light
      }>
        <FontAwesomeIcon 
          icon={colorsTheme === appClasses.dark  ? faMoon : faSun} 
          className={classes.themeSwitcher__icon}
        />
      </span>
    </button>
  );
};

export default ThemeSwitcher;