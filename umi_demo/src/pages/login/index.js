
import styles from './login.css';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page login</h1>
      <Link to='/'>Login</Link>
    </div>
  );
}
