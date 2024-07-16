import { FC, ReactNode } from 'react';
import classes from './Header.module.scss';
import { ThemeSwitcher } from '@/entities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FlexDiv } from '@/shared/ui';

interface HeaderProps {
  openNavbar: (value: 'open' | 'closed') => void;
}

const Header: FC<HeaderProps> = ({openNavbar}) => {
  return (
    window.innerWidth < 600

    ?

    <header className={classes.header}>
      <div className={classes.header__container}>
        <FlexDiv align='center'>
          <FontAwesomeIcon 
            icon={faBars} 
            className={classes.header__icon}
            onClick={() => openNavbar("open")}
          />

          <ThemeSwitcher />

          <FlexDiv align='center' justify='end'>
            <p className={classes.header__paragraph}>
              Space Travels Agency
            </p>
          </FlexDiv>
        </FlexDiv>
      </div>
    </header>

    :

    <header className={classes.header}>
      <div className={classes.header__container}>
        <p className={classes.header__paragraph}>
          Space Travels Agency
        </p>

        <FlexDiv justify='end' align='center'>
          <ThemeSwitcher />
        </FlexDiv>
      </div>
    </header>
  );
};

export default Header;