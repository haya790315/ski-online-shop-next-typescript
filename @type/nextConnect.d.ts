// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
declare module nextConnect {
  import type { NextApiRequest, NextApiResponse } from "next";
  import type { ErrorHandler, NoMatchHandler } from "next-connect";
  type apiErrorHandler = ErrorHandler<NextApiRequest, NextApiResponse>;
  type apiNoMatchHandler = NoMatchHandler<NextApiRequest, NextApiResponse>;

  type NextHandler = (err?: any) => void;
}

export = nextConnect;
