import path from "path";
import jsonPlugin from "@rollup/plugin-json";
import resolvePlugin from "@rollup/plugin-node-resolve";
import typescript2Plugin from "rollup-plugin-typescript2";
import commonJs from "rollup-plugin-commonjs";

import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";

const _resolve = (p) => path.resolve(__dirname, p);

const pkg = require(_resolve("package.json"));

const distName = pkg.name.split("/")[1];
const outputConfig = {
  "esm-bundler": {
    file: _resolve(`./dist/${distName}.esm-bundler.js`),
    format: "es",
  },
  global: {
    file: _resolve(`./dist/${distName}.global.js`),
    format: "iife",
  },
};

const options = pkg.buildOptions;

function createConfig(format, output) {
  output.name = options.name;

  output.sourcemap = false;
  // process.env.SOURCE_MAP === "true" ? true : false;

  return {
    input: "./src/index.ts",
    output,
    plugins: [
      jsonPlugin(),
      resolvePlugin(),
      commonJs(),
      typescript2Plugin({
        useTsconfigDeclarationDir:true,
        clean: true,
        cacheRoot: "../node_modules/.cache/rollup-plugin-typescript2",
        tsconfig: _resolve("tsconfig.json"),
      }),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
      }),

      terser({
        compress: {
          pure_funcs: ["console.log"],
        },
      }),
    ],
  };
}

export default options.formats.map((_format) => {
  return createConfig(_format, outputConfig[_format]);
});
