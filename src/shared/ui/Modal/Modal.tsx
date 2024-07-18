import { FC, ReactNode } from 'react';
import classes from './Modal.module.scss';

interface ModalProps {
  children?: ReactNode
}

const Modal: FC<ModalProps> = ({children}) => {
  return (
    <div className={classes.modal}>
      {children}
    </div>
  )
}

export default Modal