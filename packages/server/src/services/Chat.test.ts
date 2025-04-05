import { Chat } from './Chat';

describe('Chat', () => {
  it('Replies to messages', async () => {
    const chat = new Chat('Respond only with Hi, not hi');
    const response = await chat.send({ role: 'player', text: 'hello' });
    expect(response).toStrictEqual({
      role: 'game-master',
      text: 'Hi',
    });
  });

  it('Remembers context', async () => {
    const chat = new Chat('Respond as a person');
    await chat.send({
      role: 'player',
      text: 'Roses are red, violets are blue',
    });
    const response = await chat.send({
      role: 'player',
      text: 'What color are the roses?',
    });
    expect(/red/gi.test(response.text)).toBeTruthy();
  });

  it('Returns an error if the role is not `player`', async () => {
    const chat = new Chat('Respond only with Hi, not hi');
    const response = await chat.send({ role: 'game-master', text: 'hello' });
    expect(response).toStrictEqual({
      role: 'error',
      text: 'Invalid message role',
    });
  });

  it('Returns an error if the message text is empty', async () => {
    const chat = new Chat('Respond only with Hi, not hi');
    const response = await chat.send({ role: 'player', text: '' });
    expect(response).toStrictEqual({
      role: 'error',
      text: 'Empty message string',
    });
  });
});
