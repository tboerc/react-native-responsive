/** @type {import('bili').Config} */
module.exports = {
  plugins: {babel: false},
  input: 'src/index.ts',
  output: {
    minify: true,
    format: 'es-min',
    sourceMap: false,
    fileName: 'index.js',
  },
};
