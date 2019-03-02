import React, {Component} from 'react';
import Link from 'umi/link';

class Users extends Component {
    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                {id}
                <br />
                <Link to='/users'>返回</Link>
            </div>
        )
    }
}

export default Users;
