import React, { Component } from 'react';
import {Button} from 'antd';
import router from 'umi/router';

class User extends Component {

    handleClick = () => {
        router.push('/users');
    }
    render() {
        const userName = this.props.match.params.id;
        return (
            <div>
                Hello, {userName}, Welcome to my world!!
                <br />
                <Button type="primary" onClick={this.handleClick}>返回</Button> 
            </div>
        );
    }
}

export default User;