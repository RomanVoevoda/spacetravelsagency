import { FC } from 'react';
import classes from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FlexDiv } from '@/shared/ui';

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <a 
        target={'_blank'} 
        href={'https://vk.com/romanvoevoda'}
      >
        <FontAwesomeIcon icon={fab.faVk} className={classes.footer__icon} title={'Ссылка на группу ВК'}/>
      </a>

      <a 
        target={'_blank'} 
        href={'https://github.com/RomanVoevoda/spacetravelsagency'}
      >
        <FontAwesomeIcon icon={fab.faSquareGithub} className={classes.footer__icon} title={'Ссылка на ГитХаб'}/>
      </a>

      <FlexDiv direction='row_reverse'>
        <div className={classes.footer__container}>
          <p className={classes.footer__paragraph}>Связаться с нами:</p>
          <a 
            href={'mailto:karamount22@gmail.com'}
            className={classes.footer__link}
            title={'Отправить нам письмо'}
          >
            karamount22@gmail.com
          </a>
        </div>
      </FlexDiv>
    </footer>
  );
};

export default Footer;