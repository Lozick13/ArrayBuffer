export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }
  load(buffer) {
    this.buffer = buffer;
  }
  toString() {
    if (!this.buffer) {
      throw new Error('Buffer is not loaded');
    }

    const bufferView = new Uint16Array(this.buffer);
    let result = '';

    bufferView.forEach(el => {
      result += String.fromCharCode(el);
    });

    return result;
  }
}
