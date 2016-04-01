import babel from 'rollup-plugin-babel';
const banner = `
/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/__name__.js
 */
`;

export default {
  banner: banner.trim(),
  entry: 'lib/__name__.js',
  format: 'umd',
  dest: 'dist/__name__.js',
  moduleName: '__name__',
  plugins: [
    babel({
      runtimeHelpers: true
    })
  ]
};
