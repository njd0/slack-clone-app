export type Message = {
  username: string,
  message: string,
  time: string,
};

export type MessageBoard = {
  name: string,
  description: string,
  messages: Message[],
  viewers: string[],
}

export interface RegisterResponse {
  register: {
    user: {
      id: number;
      username: string,
      email: string,
    }
    errors?: Error[],
  }
}

export interface LoginResponse {
  login: {
    token: string,
    refreshToken: string,
    errors?: Error[],
  }
}

export interface User {
  username: string,
  email: string,
  password: string,
}

export type Error = {
  path: string,
  message: string,
}

export type RegistrationErrors = {
  username?: string,
  email?: string,
  password?: string,
  [key: string]: string | undefined,
}