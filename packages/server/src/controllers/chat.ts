import { Request, Response } from 'express';

import { Chat } from '../services/Chat';

const chatService = new Chat('Be yourself');

export const chat = async (req: Request, res: Response) => {
  const message = req.body;
  const response = await chatService.send(message);
  res.json(response);
};
