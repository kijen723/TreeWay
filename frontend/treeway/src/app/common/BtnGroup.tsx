import styles from './BtnGroup.module.scss';
import { IconType } from 'react-icons';
import { Button, BtnGroupProps } from '@/types/CommonPropsTypes';

export default function BtnGroup({ buttons, direction }: BtnGroupProps) {
  return (
    <div className={`${styles.btnGroupContainer} ${direction === 'column' ? styles.column : styles.row}`}>
      {buttons.map((button, index) => (
        <div key={index} className={styles.button} onClick={button.onClick}>
          {button.imgSrc ? (
            <img src={button.imgSrc} alt={button.alt} className={styles.profileImg} />
          ) : (
            button.icon && <button.icon aria-label={button.alt} />
          )}
        </div>
      ))}
    </div>
  );
}
