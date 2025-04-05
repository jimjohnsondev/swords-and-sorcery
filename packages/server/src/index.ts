import 'dotenv/config';

import { app } from './app';
import { router } from './router';

app.post('/chat', router);

const port = process.env.PORT;
export const server = app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
