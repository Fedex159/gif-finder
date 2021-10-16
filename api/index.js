const server = require("./src/app.js");

server.listen(process.env.PORT || 3001, () => {
  console.log(`%s listening at ${process.env.PORT ? process.env.PORT : 3001}`); // eslint-disable-line no-console
});
