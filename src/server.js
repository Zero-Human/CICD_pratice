import express from "express";

export const serverStart = () => {
  const port = process.env.PORT || 8000;
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello from the server!");
  });

  app.get("/health", (req, res) => {
    res.sendStatus(200);
  });

  app.get("/test", async (req, res) => {
    res.sendStatus(200);
  });

  const server = app.listen(port, () => {
    console.log(`app listening at port number ${port}`);
  });
  console.log(server);
  return server;
};
export const serverStop = async (server) => {
  await server.close();
};
export default serverStart;
