import express from 'express';
import 'dotenv/config';

import './database';
import { routes } from './routes';
import { emmiter } from './database';

const app = express();

app.use(express.json());
app.use(routes);

emmiter.on("already", () => {
  app.listen(3333, () => {
    console.log("Server is Running");
  });
})


