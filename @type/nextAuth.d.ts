// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
declare module nextAuth {
  interface ICredentials {
    email: string;
    password: string;
  }
  interface IUser {
    userName: string;
    email: string;
  }
}

export = nextAuth;
