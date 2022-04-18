import type { apiErrorHandler,apiNoMatchHandler } from "@type/nextConnect";


const onError: apiErrorHandler = async (err, req, res) => {
  res.status(500).send({
    success: false,
    message: err.toString(),
  });
  res.end();
};

const onNoMatch: apiNoMatchHandler = async (req, res) => {
  res.status(404).send({
    success: false,
    message: "no data is matched",
  });
  res.end();
};

export { onError, onNoMatch };
