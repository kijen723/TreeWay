import styles from './RoundBtnGroup.module.scss';
import { RoundBtnGroupProps } from '@/types/CommonPropsTypes';

export default function RoundBtnGroup({ buttons, direction }: RoundBtnGroupProps) {
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
