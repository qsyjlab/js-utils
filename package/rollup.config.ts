/*
 * @Description:
 * @Autor: qsyj
 * @Date: 2022-05-12 17:53:57
 * @LastEditors: qsyj
 * @LastEditTime: 2022-05-13 14:44:53
 */

import path from "path";
import jsonPlugin from "@rollup/plugin-json";
import resolvePlugin from "@rollup/plugin-node-resolve";
import typescript2Plugin from "rollup-plugin-typescript2";
import commonJs from "rollup-plugin-commonjs";

// 压缩 代码 去除 log等
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel"; // 转换babel

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

  output.sourcemap = process.env.SOURCE_MAP === "true" ? true : false;

  return {
    input: "./src/index.ts",
    output,
    plugins: [
      jsonPlugin(),
      resolvePlugin(),
      commonJs(), // 解析第三方模块
      babel({
        babelHelpers: "runtime", //
        exclude: "node_modules/**", // 排除掉node_modules的第三方库
      }),
      terser({
        compress: {
          pure_funcs: ["console.log"], // 去掉console.log函数
        },
      }),
      typescript2Plugin({
        clean: true,
        cacheRoot: "../node_modules/.cache/rollup-plugin-typescript2",
        tsconfig: _resolve("tsconfig.json"),
      }),
    ],
  };
}

export default options.formats.map((_format) => {
  return createConfig(_format, outputConfig[_format]);
});
