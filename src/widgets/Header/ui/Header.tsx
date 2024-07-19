import { FC } from 'react';
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

    <header className={
      classes.header
      +
      ' '
      +
      classes.header_mobile
    }>
      <FlexDiv align='align_center'>
        <FontAwesomeIcon 
          icon={faBars} 
          className={classes.header__icon}
          onClick={() => openNavbar("open")}
        />

        <ThemeSwitcher />

        <FlexDiv align='align_center' justify='justify_end'>
          <p className={classes.header__paragraph}>
             Space Travels Agency
          </p>
        </FlexDiv>
      </FlexDiv>
    </header>

    :

    <header className={classes.header}>
      <p className={classes.header__paragraph}>
        Space Travels Agency
      </p>

      <FlexDiv justify='justify_end' align='align_center'>
        <ThemeSwitcher />
      </FlexDiv>
    </header>
  );
};

export default Header;