import { describe, expect, it } from 'vitest';
import { renderToString } from 'react-dom/server';

import { App } from './App';

describe('Test the app', () => {
  it('renders', () => {
    const app = renderToString(<App />);
    console.log(app);
    document.body.innerHTML = app;
    expect(document.body.querySelector('h1')).toBeTruthy();
  });
});
