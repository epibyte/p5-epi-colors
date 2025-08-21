// run via: npx rollup -c
// git tag v0.0.1        
// git push origin v0.0.1
// call: https://cdn.jsdelivr.net/gh/epibyte/p5-epi-shapesvg@v0.0.1/dist/p5-epi-colors.js
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'dist/p5-epi-colors.js',
    format: 'iife',            // Immediately Invoked Function Expression
    name: 'EpiColors',       // Global namespace when included via script tag
  },
  plugins: [resolve()],
};