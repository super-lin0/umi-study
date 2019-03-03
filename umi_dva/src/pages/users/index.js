
import styles from './users.css';
import Link from 'umi/link';
import { Card, Col, Row } from 'antd';

export default function() {
  const users = [
    {
      id: '1',
      userName: '张开',
      age: 18,
    }, {
      id: '2',
      userName: '里斯',
      age: 12
    }, {
      id: '3',
      userName: '菲兹',
      age: 45
    }
  ]

  const UserList = users.map(item => 
    <Col span={8}>
      <Card
        key={item.id}
        title={item.userName}
        bordered={false}
        style={{ width: 300 }}
        extra={<Link to={`/users/${item.userName}`} >Detail</Link>}
      >
        <p>id: {item.id}</p>
        <p>userName: {item.userName}</p>
        <p>age: {item.age}</p>
      </Card>
    </Col>
  );
  return (
    <div className={styles.normal}>
      <h1>Page users</h1>
      <Link to='/'>首页</Link>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          {UserList}
        </Row>
      </div>
    </div>
  );
}
