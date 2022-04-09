import  { ErrorHandler } from "next-connect";


const onError: ErrorHandler<any, any> = async (err, _req, res,_next) => {
  res.status(500).send({
    confirmation: "fail",
    message:err.toString(),
  });
  res.end()
};

export default onError;
