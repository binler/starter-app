import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withReduxStore from '../with-redux-store';
import 'semantic-ui-css/semantic.min.css';
import withNProgress from "next-nprogress";
export default withNProgress()(withReduxStore(
	class InitApp extends App {
		static async getInitialProps({ Component, ctx }) {
			return {
				pageProps: Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}
			};
		}

		componentDidCatch (error, errorInfo) {
			console.log('CUSTOM ERROR HANDLING', error)
			// This is needed to render errors correctly in development / production
			super.componentDidCatch(error, errorInfo)
		}

		render() {
			const { Component, pageProps, reduxStore } = this.props;
			return (
				<Container>
					<Provider store={reduxStore}>
                        <Component {...pageProps} />
					</Provider>
				</Container>
			);
		}
	}
));
