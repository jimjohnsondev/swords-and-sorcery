import request from 'supertest';

import { app, server } from './index';

describe('GET /', () => {
  it('Responds with 200 status', (done) => {
    request(app)
      .get('/')
      .expect(200, { message: 'Hello, world!' })
      .end((err) => {
        if (err) return done(err);
        return done();
      })
  });

  afterAll(() => server.close());
});