import React from 'react';
import UserList from '../containers/userListContainer.js';

export default () => (
    <div className='app-root'>
        <h1 className='app-header'>Users List</h1>
        <UserList></UserList>
    </div>
);