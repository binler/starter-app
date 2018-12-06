import React from 'react';
import Head from 'next/head';
import Header from './App/Header';
import Footer from './App/Footer';
import Container from './App/Container';

export default ({ children, title = 'Starter App' }) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<div>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</div>
	</div>
);
