// Polyfills for Node 18+ globals needed by undici/cheerio under Jest
const { TextDecoder, TextEncoder } = require('util');
const { ReadableStream } = require('stream/web');

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.ReadableStream === 'undefined') {
  global.ReadableStream = ReadableStream;
}
