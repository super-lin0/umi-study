export default {
    // 支持值为 Object 和 Array
    'GET /api/users': { users: [
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
    ] },
  
    // GET POST 可省略
    '/api/users/1': { id: 1 },
  
    // 支持自定义函数，API 参考 express@4
    'POST /api/users/create': (req, res) => { res.end('OK'); },
  };