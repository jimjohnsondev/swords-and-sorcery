import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

export const app: Express = express();
app.use(express.json());
app.use(
  cors({
    origin: [/localhost/gi],
  }),
);

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello, world!' });
});

export const server = app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
