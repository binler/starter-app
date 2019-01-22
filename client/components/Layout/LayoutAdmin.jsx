import React from 'react';
import Head from 'next/head';
import SideNav from './Admin/SideNav';
import Header from './Admin/Header'
import { Segment, Sidebar } from 'semantic-ui-react';

export default ({ children, title = 'Admin' }) => (
	<div style={{height: '100vh'}}>
		<Head>
			<title>{title}</title>
		</Head>
		<Sidebar.Pushable as={Segment}>
			<SideNav />
			<Sidebar.Pusher style={{marginLeft: 150}}>
				<Header />
				{children}
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	</div>
);
