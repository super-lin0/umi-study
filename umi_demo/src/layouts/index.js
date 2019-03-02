import styles from './index.css';

function BasicLayout(props) {

  if(props.location.pathname === '/login') {
    return <div>
      <h1>登录页面</h1>
      {props.children}
    </div>
  }

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!，这是一个全局Layout</h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;
