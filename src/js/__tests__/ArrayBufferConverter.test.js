import { getBuffer, ArrayBufferConverter } from '../app';

test('ArrayBufferConverter', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());
  const result = arrayBufferConverter.toString();

  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('ArrayBufferConverter Error', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  let result = 'Error not found';

  try {
    arrayBufferConverter.toString();
  } catch (error) {
    result = error.message;
  }

  expect(result).toBe('Buffer is not loaded');
});
