// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
declare module nextConnect {
  import type { NextApiRequest, NextApiResponse } from "next";
  import type { ErrorHandler, NoMatchHandler } from "next-connect";
  export type apiErrorHandler = ErrorHandler<NextApiRequest, NextApiResponse>;
  export type apiNoMatchHandler = NoMatchHandler<
    NextApiRequest,
    NextApiResponse
  >;

  export type NextHandler = (err?: any) => void;
}

export = nextConnect;
