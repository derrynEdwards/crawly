const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

// Test HTTPS "/"
test('https://example.com/ -> example.com/', () => {
    const url = 'https://example.com/';
    const normUrl = 'example.com/';

    expect(normalizeURL(url)).toBe(normUrl);
});
// Test HTTPS "/test"
test('https://example.com/test -> example.com/test', () => {
    const url = 'https://example.com/test';
    const normUrl = 'example.com/test';
    
    expect(normalizeURL(url)).toBe(normUrl);
});
// Test HTTPS "/test/"
test('https://example.com/test/ -> example.com/test', () => {
    const url = 'https://example.com/test/';
    const normUrl = 'example.com/test';
    
    expect(normalizeURL(url)).toBe(normUrl);
});
// Test HTTPS "/test/hello"
test('https://example.com/test/hello -> example.com/test/hello', () => {
    const url = 'https://example.com/test/hello';
    const normUrl = 'example.com/test/hello';
    
    expect(normalizeURL(url)).toBe(normUrl);
});
// Test HTTPS "/test/hello/"
test('https://example.com/test/hello/ -> example.com/test/hello', () => {
    const url = 'https://example.com/test/hello/';
    const normUrl = 'example.com/test/hello';
    
    expect(normalizeURL(url)).toBe(normUrl);
});
// Test HTTP "/"
test('http://EXAMPLE.com/ -> example.com/', () => {
    const url = 'http://EXAMPLE.com/';
    const normUrl = 'example.com/';

    expect(normalizeURL(url)).toBe(normUrl);
});
// Test HTTP "/test" and Port 80
test('http://example.com:80/test -> example.com/test', () => {
    const url = 'http://example.com:80/test';
    const normUrl = 'example.com/test';
    
    expect(normalizeURL(url)).toBe(normUrl);
});
// Test HTTP "/test/" and port 80 and Subdomain
test('http://www.example.com:80/test/ -> example.com/test', () => {
    const url = 'http://www.example.com:80/test/';
    const normUrl = 'example.com/test';
    
    expect(normalizeURL(url)).toBe(normUrl);
});
// Test HTTP "/test/hello" and port 80 and Subdomain
test('http://www.example.com:80/test/hello -> example.com/test/hello', () => {
    const url = 'http://www.example.com:80/test/hello';
    const normUrl = 'example.com/test/hello';
    
    expect(normalizeURL(url)).toBe(normUrl);
});
// Test HTTP "/test/hello/" and Port 80 and Subdomain
test('HTTP://WWW.example.COM/test/hello/ -> example.com/test/hello', () => {
    const url = 'HTTP://WWW.example.COM/test/hello/';
    const normUrl = 'example.com/test/hello';
    
    expect(normalizeURL(url)).toBe(normUrl);
});