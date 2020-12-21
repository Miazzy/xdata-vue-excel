import vue from 'rollup-plugin-vue';
import babel from "rollup-plugin-babel";
import commonjs from ' rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

export default {
    input: 'JsonExcel.vue',
    output: [{
            format: 'cjs',
            file: 'dist/vue-json-excel.cjs.js'
        },
        {
            format: 'esm',
            file: 'dist/vue-json-excel.esm.js'
        },
        {
            name: 'JsonExcel',
            format: 'umd',
            file: 'dist/vue-json-excel.umd.js'
        }
    ],
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: [
        vue(),
        commonjs(),
        resolve(),
        babel({
            exclude: 'node_modules/**', // 防止打包node_modules下的文件
            runtimeHelpers: true, // 使plugin-transform-runtime生效
        }),
        // eslint(),
        // terser(),
        uglify()
    ]
}