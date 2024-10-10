// app/not-found.tsx
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Sorry, the page you are looking for does not exist.</p>
      <a href="/" className={styles.homeLink}>
        Go back to Home
      </a>
    </div>
  );
}