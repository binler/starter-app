import React, { Component } from 'react';
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react';
import Layout from '../../components/Layout/Layout';
import API from '../../api';

export default class index extends Component {

  static async getInitialProps() {
    const res = await API.get('test')
    return {test : res.data.test}
  }

	render() {
    console.log(this.props)
		return (
			<Layout title="Home">
				<Segment style={{ padding: '8em 0em' }} vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={8}>
								<Header as="h3" style={{ fontSize: '2em' }}>
									We Help Companies and Companions
								</Header>
								<p style={{ fontSize: '1.33em' }}>
									We can give your company superpowers to do things that they
									never thought possible. Let us delight your customers and
									empower your needs... through pure data analytics.
								</p>
								<Header as="h3" style={{ fontSize: '2em' }}>
									We Make Bananas That Can Dance
								</Header>
								<p style={{ fontSize: '1.33em' }}>
									Yes that's right, you thought it was the stuff of dreams, but
									even bananas can be bioengineered.
								</p>
							</Grid.Column>
							<Grid.Column floated="right" width={6}>
								<Image
									bordered
									rounded
									size="large"
									src="https://react.semantic-ui.com/images/wireframe/white-image.png"
								/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column textAlign="center">
								<Button size="huge">Check Them Out</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Layout>
		);
	}
}
