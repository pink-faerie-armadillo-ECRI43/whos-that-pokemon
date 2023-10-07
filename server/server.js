const express = require('express');
const app = express();
const apiRouter = require('./routes/api');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public/'));

//set up the router here for '/
app.use('/', apiRouter);

// Unknown route handler
app.use('*', (req, res) => res.status(404));

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
