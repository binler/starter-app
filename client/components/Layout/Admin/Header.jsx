import React from 'react';
import {
	Header,
	Segment,
	Search,
	Image,
	Icon,
	Dropdown
} from 'semantic-ui-react';

const trigger = (
	<span>
		<Image
			avatar
			src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
		/>
	</span>
);

const options = [
	{ key: 'user', text: 'Account', icon: 'user', as : 'a', href: '/admin/account' },
	{ key: 'settings', text: 'Settings', icon: 'settings', as : 'a', href: '/admin/setting' },
	{ key: 'sign-out', text: 'Sign Out', icon: 'sign out', as : 'a', href: '/admin/logout' }
];

export default () => (
	<Segment clearing>
		<Header floated="right">
			<Icon name="bell outline" fitted={true} size="mini" />
			<Header.Content>
				<Dropdown
					trigger={trigger}
					options={options}
					pointing="top right"
					icon={null}
				/>
			</Header.Content>
		</Header>
		<Header floated="left">
			<Search size="mini" />
		</Header>
	</Segment>
);
