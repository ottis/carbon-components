'use strict';

const { BABEL_ENV } = process.env;

module.exports = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: BABEL_ENV !== 'test' ? false : 'commonjs',
        targets: {
          browsers: ['last 1 versions', 'Firefox ESR', 'ie >= 11'],
        },
      },
    ],
  ],
});
