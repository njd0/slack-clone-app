import React, { useState } from 'react';
import { Container, Header, Form, Input, Button, Message } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';

import { LOGIN_MUTATION } from "../graphql/mutations";
import { LoginResponse, User } from '../types';

type LoginUser = {
  email: string,
  password: string,
}

const Login = (props: any) => {
  const [error, setError] = useState('');
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
  });

  const [loginUser, loginResponse] = useMutation<LoginResponse, LoginUser>(LOGIN_MUTATION, {
    variables: { email: user.email, password: user.password }
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
    try {
      const response = await loginUser();
      const { token, refreshToken, errors } = response.data?.login!;
    } catch (err) {
      setError(err.message);
    }

    props.history.push('/');
  }

  const renderError = () => {
    if (error) {
      return (
        <Message negative size="large">
          <p>{error}</p>
        </Message>
      )
    }
  }

  return (
    <Container>
        <Form>
          <Header>Sign In</Header>
          <Form.Field
            control={Input}
            label='Email'
            name='email'
            onChange={onChange}
            required={true}
          />
          <Form.Field
            control={Input}
            label='Password'
            type='password'
            name='password'
            onChange={onChange}
            required={true}
          />
          <Form.Field
            control={Button}
            content='Sign Up'
            onClick={onSubmit}
          />
          {renderError()}
        </Form>
    </Container>
  );
};

export default Login;