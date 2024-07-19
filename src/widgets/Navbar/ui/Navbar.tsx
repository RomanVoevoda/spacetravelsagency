import { FC } from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { pathsArray } from '../consts/pathsArray';
import { TextSlice } from '@/shared/ui';

interface NavbarProps {
  navbarState: 'open' | 'closed';
  closeNavbar: (value: 'open' | 'closed') => void;
}

const Navbar: FC<NavbarProps> = ({ navbarState, closeNavbar }) => {
  return (
    window.innerWidth < 600

    ?

    <nav className={
      (navbarState === 'open') 
      ? 
      classes.navbar + ' ' + classes.navbar_open
      :
      classes.navbar + ' ' + classes.navbar_closed
    }>
      <FontAwesomeIcon 
        icon={faXmark} 
        className={classes.navbar__icon}
        onClick={() => closeNavbar("closed")}
      />

      <div className={classes.navbar__text_container}>
        <TextSlice font={'rubik'} align={'center'} size={'normal'}>
          Space Travels Agency
        </TextSlice>
      </div>

      {pathsArray.map(path => (
        <Link 
          className={classes.navbar__button} 
          to={path.path}
          key={path.text}
          onClick={() => closeNavbar("closed")}
        >
          {path.text}
        </Link>
      ))}
    </nav>

    :

    <nav className={classes.navbar}>
      {pathsArray.map(path => (
        <Link 
          className={classes.navbar__button} 
          to={path.path}
          key={path.text}
        >
          {path.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;