import { Link } from '../../../routes';
import { Container, Image, Menu, Button } from 'semantic-ui-react';
export default () => (
	<Menu fixed="top" inverted>
		<Container>
			<Menu.Item as="a" header>
				<Image
					size="mini"
					src="https://react.semantic-ui.com/logo.png"
					style={{ marginRight: '1.5em' }}
				/>
				Project Name
			</Menu.Item>
			<Menu.Item>
				<Link route="index">
					<a>Home</a>
				</Link>
			</Menu.Item>
			<Menu.Item>
				<Link route="about">
					<a>About</a>
				</Link>
			</Menu.Item>
			<Menu.Item>
				<Link route="contact">
					<a>Contact</a>
				</Link>
			</Menu.Item>
			<Menu.Item position="right">
				<Button as="a" inverted={true}>
					Log in
				</Button>
				<Button
					as="a"
					inverted={true}
					style={{ marginLeft: '0.5em' }}
				>
					Sign Up
				</Button>
			</Menu.Item>
		</Container>
	</Menu>
);
