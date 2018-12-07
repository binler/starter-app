import React, { Component } from 'react';
import { withFormik } from 'formik';
import Layout from '../../components/Layout/Layout';
import { Form, Message } from 'semantic-ui-react';
import * as Yup from 'yup';

class Contact extends Component {
	render() {
		console.log(this.props);
		const { handleSubmit, values, handleChange } = this.props;
		return (
			<Layout title="Contact">
				<Form onSubmit={handleSubmit}>
					<Form.Input
						placeholder="Name"
						onChange={handleChange}
						name="name"
						value={values.name}
					/>
					<Message color="red">Red</Message>
					<Form.Button content="Submit" type="submit" />
				</Form>
			</Layout>
		);
	}
}

export default withFormik({
	mapPropsToValues: () => ({ name: '' }),
	validationSchema: Yup.object().shape({
		name: Yup.string().required('Name is required')
	}),
	handleSubmit: values => {
		console.log(values);
	}
})(Contact);
