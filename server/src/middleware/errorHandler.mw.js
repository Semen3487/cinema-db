
module.exports.errorHandler = (err, req, res, next) => {
  if(res.headerSent){
    return;
  }
  res.status(err?.status ?? 500)
  .send({errors: [{title: err?.message ?? `Internal Server Error`}]})
};

//* 0 ?? nothing => 0
//* 0 || nothing => nothing