import React, { Component } from 'react';
import { withFormik } from 'formik';
import Layout from '../../components/Layout/Layout';
import { Form, Message } from 'semantic-ui-react';
import * as Yup from 'yup';

const Contact = ({ handleSubmit, values, handleChange, errors, ...props }) => {
	return (
		<Layout title="Contact">
			<Form onSubmit={handleSubmit}>
				<Form.Input
					placeholder="Name"
					onChange={handleChange}
					name="name"
					value={values.name}
				/>
				{errors.name && <Message color="red">{errors.name}</Message>}
				<Form.Button content="Submit" type="submit" />
			</Form>
		</Layout>
	);
};

export default withFormik({
	mapPropsToValues: () => ({ name: '', email: '' }),
	validationSchema: Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email()
	}),
	handleSubmit: values => {
		console.log(values);
	}
})(Contact);
