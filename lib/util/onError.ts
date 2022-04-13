import type { apiErrorHandler } from "@type/nextConnect";

const onError: apiErrorHandler = async (err, _req, res, _next) => {
  res.status(500).send({
    success: false,
    message: err.toString(),
  });
  res.end();
};

export default onError;
