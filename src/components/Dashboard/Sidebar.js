
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{backgroundColor: 'orange',width:'200px'}}>
      <ul>
        <li><Link to="users">Users</Link></li>
        <li><Link to="orders">Orders</Link></li>
        <li><Link to="products">Products</Link></li>
        <li><Link to="vehicles">Vehicles</Link></li>
        <li><Link to="business">Business</Link></li>
        <li><Link to="security">Security</Link></li>
        <li><Link to="revenue">Revenue</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
