import React, { useState } from 'react';
import { Container, Header, Form, Input, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';

import { REGISTER_MUTATION } from "../graphql/mutations";
import { RegisterUser, User, RegistrationErrors } from '../types';

const Register = (props: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<RegistrationErrors>({});

  const [registerUser, registerResponse] = useMutation<RegisterUser, User>(REGISTER_MUTATION, {
    variables: { username, email, password }
  });

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
            onChange={(e: React.FormEvent<HTMLSelectElement>) => setUsername(e.currentTarget.value)}
            required={true}
            error={errors['username']}
          />
          <Form.Field
            control={Input}
            label='Email'
            name='email'
            onChange={(e: React.FormEvent<HTMLSelectElement>) => setEmail(e.currentTarget.value)}
            required={true}
            error={errors['email']}
          />
          <Form.Field
            control={Input}
            label='Password'
            type='password'
            name='password'
            onChange={(e: React.FormEvent<HTMLSelectElement>) => setPassword(e.currentTarget.value)}
            required={true}
            error={errors['password']}
          />
          <Form.Field
            control={Button}
            content='Sign Up'
            onClick={onSubmit}
            disabled={!username.length || !email.length || !password.length}
            align='center'
          />
        </Form>
    </Container>
  );
};

export default Register;