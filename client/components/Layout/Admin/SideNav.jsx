import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

export default () => (
	<Sidebar
		as={Menu}
		animation="overlay"
		icon="labeled"
		inverted
		vertical
		visible
		width="thin"
	>
		<Menu.Item as="a">
			<Icon name="home" />
			Home
		</Menu.Item>
		<Menu.Item as="a">
			<Icon name="gamepad" />
			Games
		</Menu.Item>
		<Menu.Item as="a">
			<Icon name="camera" />
			Channels
		</Menu.Item>
	</Sidebar>
);
