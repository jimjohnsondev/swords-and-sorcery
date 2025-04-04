import { Chat } from './Chat';

const chat = new Chat('Respond only with Hi, not hi');

describe('Chat', () => {
  it('Replies to messages', async () => {
    const response = await chat.send({ role: 'player', text: 'hello' });
    expect(response).toStrictEqual({
      role: 'game-master',
      text: 'Hi',
    });
  });

  it('Returns an error if the role is not `player`', async () => {
    const response = await chat.send({ role: 'game-master', text: 'hello' });
    expect(response).toStrictEqual({
      role: 'error',
      text: 'Invalid message role',
    });
  });

  it('Returns an error if the message text is empty', async () => {
    const response = await chat.send({ role: 'player', text: '' });
    expect(response).toStrictEqual({
      role: 'error',
      text: 'Empty message string',
    });
  });
});
