
import styles from './users.css';
import router from 'umi/router';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page users</h1>
      {/* <button onClick={() => router.goBack()}>首页</button> */}
      <button onClick={() => router.push('/')}>首页</button>
      <li>
        <Link to='/users/张三'>张三</Link>
      </li>
      <li>
        <Link to='/users/李四'>李四</Link>
      </li>
    </div>
  );
}
