import styles from './index.css';
import Link from 'umi/link';


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <Link to='/users'>Go to users</Link>
        </li>
        <li>
          <Link to='/login'>Go to login</Link>
        </li>
      </ul>
    </div>
  );
}
