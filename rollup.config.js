import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import json from 'rollup-plugin-json';
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel'
import clean from 'postcss-clean';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import image from 'rollup-plugin-image-files'

const production = !process.env.ROLLUP_WATCH;

// const dev = 'development';
// const prod = 'production';
// const env = (process.env.NODE_ENV === prod || process.env.NODE_ENV === dev) ? process.env.NODE_ENV : dev;

const plugins = [
    replace({ 'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development') }),
    resolve(),
    babel({ 
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react']
    }),
    image({
        limit: 50000
    }),
    json(),
    commonjs({
        // All of our own sources will be ES6 modules, so only node_modules need to be resolved with cjs
        include: 'node_modules/**',
        sourceMap: false
    }),
    postcss({
        extract: true, // extracts to `${basename(dest)}.css`
        plugins: [autoprefixer, clean],
        writeDefinitions: true
        // postcssModulesOptions: { ... }
    }),
    typescript(),
    production && terser()
];

export default {
    plugins,
    external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
    input: './lib/index.ts',
    output: {
        sourcemap: false,
        file: './dist/index.js',
        format: 'cjs'
    }
};
