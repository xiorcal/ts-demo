import { greeter } from './demo';

describe('greeter function', () => {
  test('a proper greet should start with Hello', () => {
    expect(greeter('Bob').startsWith('Hello')).toBe(true);
    expect(greeter('Bob').startsWith("Sup'")).toBe(false);
  });
});
