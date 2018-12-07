import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import { Segment } from 'semantic-ui-react';

export default class About extends Component {
	// Add some delay
	static async getInitialProps() {
		await new Promise(resolve => {
			setTimeout(resolve, 3000);
		});
		return {};
	}

	render() {
		return (
			<Layout title="About">
				<Segment>
					<h1>This is about</h1>
				</Segment>
			</Layout>
		);
	}
}
