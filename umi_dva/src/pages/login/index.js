
import styles from './login.css';
import router from 'umi/router';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page login</h1>
      <button onClick={() => router.push('/')}>登录</button>
    </div>
  );
}
