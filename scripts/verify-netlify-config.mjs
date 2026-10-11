import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const toml = readFileSync('netlify.toml', 'utf8');
const required = ['X-Content-Type-Options = "nosniff"', 'Referrer-Policy = "strict-origin-when-cross-origin"', 'X-Frame-Options = "DENY"', 'Permissions-Policy = "camera=(), microphone=(), geolocation=()"'];
for (const entry of required) assert.ok(toml.includes(entry), 'Missing response header: ' + entry);
assert.ok(toml.includes('publish = "build"'));
assert.ok(toml.includes('NODE_VERSION = "22"'));
assert.ok(!/^Content-Security-Policy\s*=/m.test(toml), 'CSP must be browser tested before enabling');
console.log('Netlify static security configuration checks passed; deployed headers remain unverified.');
