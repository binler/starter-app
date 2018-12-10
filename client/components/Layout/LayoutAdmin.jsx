import React, { Component } from 'react';
import Sidebar from './Admin/Sidebar'

export default ({ children, title = 'Starter App' }) => (
	<div>
		<Sidebar />
        <div style={{marginLeft: 250}}></div>
	</div>
);
