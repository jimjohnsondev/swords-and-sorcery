import { Request, Response, Router } from 'express';

import { chat } from './controllers';

export const router = Router();
router.post('/chat', (req: Request, res: Response) => chat(req, res));
