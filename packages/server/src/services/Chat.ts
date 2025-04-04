import Anthropic from '@anthropic-ai/sdk';
import { MessageParam } from '@anthropic-ai/sdk/resources';
import 'dotenv/config';

interface IMessage {
  role: 'player' | 'game-master' | 'error';
  text: string;
}

export class Chat {
  #anthropic: Anthropic;
  #systemPrompt: string;

  constructor(systemPrompt: string) {
    this.#systemPrompt = systemPrompt;
    this.#anthropic = new Anthropic();
  }

  async send(message: IMessage): Promise<IMessage> {
    const { role, text } = message;
    if (role !== 'player') {
      return {
        role: 'error',
        text: 'Invalid message role',
      };
    }
    if (!text) {
      return {
        role: 'error',
        text: 'Empty message string',
      };
    }

    const claudMessage: MessageParam = {
      role: 'user',
      content: [
        {
          type: 'text',
          text: message.text,
        },
      ],
    };

    const reply = await this.#anthropic.messages.create({
      model: 'claude-3-7-sonnet-20250219',
      max_tokens: 1000,
      temperature: 1,
      system: this.#systemPrompt,
      messages: [claudMessage],
    });
    const replyText = (reply.content?.[0] as unknown as any).text;

    return {
      role: 'game-master',
      text: replyText,
    };
  }
}
