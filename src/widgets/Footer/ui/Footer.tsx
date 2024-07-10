import React, { FC } from 'react';
import classes from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ReversibleDiv } from '@/shared/ui';

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <a 
        target={'_blank'} 
        href={'https://vk.com/romanvoevoda'}
      >
        <FontAwesomeIcon icon={fab.faVk} className={classes.footer__icon} />
      </a>

      <a 
        target={'_blank'} 
        href={'https://github.com/RomanVoevoda/spacetravelsagency'}
      >
        <FontAwesomeIcon icon={fab.faSquareGithub} className={classes.footer__icon} />
      </a>

      <ReversibleDiv type={'row'}>
        <div className={classes.footer__container}>
          <p>Связаться с нами:</p>
          <a 
            href={'mailto:karamount22@gmail.com'}
            className={classes.footer__link}
          >
            karamount22@gmail.com
          </a>
        </div>
      </ReversibleDiv>
    </footer>
  )
}

export default Footer