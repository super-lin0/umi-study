import styles from './index.css';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <Link to='/login'>登录</Link>
        </li>
        <Link to='/users'>用户列表</Link>
      </ul>
    </div>
  );
}
