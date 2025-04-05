import request, { Response } from 'supertest';
import { app } from './app';
import { router } from './router';
import { server } from './index';

describe('/chat', () => {
  beforeAll(() => {
    app.post('/chat', router);
  });

  test('Posting a message returns a response from the `game-master', async () => {
    const res = await request(app)
      .post('/chat')
      .send({ role: 'player', text: 'hello' })
      .set('Accept', 'application/json')
      .expect(200);

    expect(res.body.role).toBe('game-master');
    expect(res.body.text).not.toBeUndefined();
  });

  afterAll(() => {
    server.close();
  });
});
