import React from 'react';
import { reduxForm } from 'redux-form';

import Form from './form';
import FormGroup from './form-group';
import FormLabel from './form-label';
import FormError from './form-error';
import Input from './input';
import Button from './button';
import Alert from './alert';

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required.';
  }

  if (!values.password) {
    errors.password = 'Password is required.';
  }

  return errors;
};

const LoginForm = ({
  handleSubmit,
  resetForm,
  isPending,
  hasError,
  fields: {
    username,
    password,
  },
}) => (
  <Form handleSubmit={ handleSubmit }>
    <Alert isVisible={ isPending }>Loading...</Alert>
    <Alert id="qa-alert" isVisible={ hasError } status="error">Invalid username and password</Alert>

    <FormGroup>
      <FormLabel id="qa-uname-label">Username</FormLabel>
      <Input type="text" fieldDefinition={ username } id="qa-uname-input" />
      <FormError id="qa-uname-validation" isVisible={ username.touched && username.error }>
        { username.error }
      </FormError>
    </FormGroup>

    <FormGroup>
      <FormLabel id="qa-password-label">Password</FormLabel>
      <Input type="password" fieldDefinition={ password } id="qa-password-input" />
      <FormError id="qa-password-validation" isVisible={ password.touched && password.error }>
        { password.error }
      </FormError>
    </FormGroup>

    <FormGroup>
      <Button type="submit" className="mr1" id="qa-login-button">
        Login
      </Button>
      <Button onClick={ resetForm } type="button" className="bg-red" id="qa-clear-button">
        Clear
      </Button>
    </FormGroup>
  </Form>
);

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  isPending: React.PropTypes.bool.isRequired,
  hasError: React.PropTypes.bool.isRequired,
  fields: React.PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'login',
  fields: [
    'username',
    'password',
  ],
  validate,
})(LoginForm);
