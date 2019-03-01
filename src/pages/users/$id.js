import React, {Component} from 'react';

class Users extends Component {
    render() {
        const id = this.props.match.params.id;
        return (
            <div>{id}</div>
        )
    }
}

export default Users;
