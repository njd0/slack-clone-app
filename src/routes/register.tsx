import React, { useState } from 'react';
import { Container, Header, Form, Input, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';

import { REGISTER_MUTATION } from "../graphql/mutations";
import { RegisterResponse, User, RegistrationErrors } from '../types';

const Register = (props: any) => {
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
  });

  const [registerUser, registerResponse] = useMutation<RegisterResponse, User>(REGISTER_MUTATION, {
    variables: { username: user.username, email: user.email, password: user.password }
  });

  const onChange = (event : React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    setUser((currentUser) => {
      return {
        ...currentUser,
        [name]: value,
      };
    });
  }

  const onSubmit = async () => {
    const response = await registerUser();
    const { user, errors } = response.data?.register!;

    if (errors && errors.length > 0) {
      const registrationErrors: RegistrationErrors = {};

      errors.forEach(({ path, message }) => {
        registrationErrors[path] = message;
      });

      setErrors(registrationErrors);
      return;
    }

    props.history.push('/');
  }

  return (
    <Container>
        <Form>
          <Header>Sign Up</Header>
          <Form.Field
            control={Input}
            label='Username'
            name='username'
            onChange={onChange}
            required={true}
            error={errors['username']}
          />
          <Form.Field
            control={Input}
            label='Email'
            name='email'
            onChange={onChange}
            required={true}
            error={errors['email']}
          />
          <Form.Field
            control={Input}
            label='Password'
            type='password'
            name='password'
            onChange={onChange}
            required={true}
            error={errors['password']}
          />
          <Form.Field
            control={Button}
            content='Sign Up'
            onClick={onSubmit}
          />
        </Form>
    </Container>
  );
};

export default Register;