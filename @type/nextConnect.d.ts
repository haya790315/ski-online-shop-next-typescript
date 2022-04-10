// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
declare module nextConnect {
  import type { NextApiRequest, NextApiResponse } from "next";
  import type { ErrorHandler } from "next-connect";
  export type apiErrorHandler = ErrorHandler<NextApiRequest, NextApiResponse>;
}

export = nextConnect;
