
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import externalGlobals from "rollup-plugin-external-globals";
import { terser } from "rollup-plugin-terser";
export default {
	input: 'src/ARnftThreejs.ts', // our source file
	output: [
		{
			//umd
			format: 'umd',
			name: 'ARnftThreejs',
			file: 'dist/ARnftThreejs.js',
			interop: 'default',
			sourcemap: true,
			globals: {
				three: "THREE"
			}
		}
	],
	external: [
	...Object.keys(pkg.dependencies || {}),
	"THREE"
  ],
	plugins: [
		typescript({
			tsconfig: "tsconfig.json",
			typescript: require('typescript'),
			useTsconfigDeclarationDir: "./types",
		}),
		externalGlobals({
			three: "THREE"
		}),
		json(),
		nodeResolve(),
		terser() // minifies generated bundles
	]
};
