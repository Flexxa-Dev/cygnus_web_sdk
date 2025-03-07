import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const env = dotenv.config().parsed || {};
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        type: "json",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".d.ts"],
    alias: {
      "@resources": path.resolve(__dirname, "src/resources"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@ui": path.resolve(__dirname, "src/ui"),
    },
  },
  mode: "production",
  plugins: [new webpack.DefinePlugin(envKeys)],
};

export default [
  // ES Module build
  {
    ...commonConfig,
    entry: "./src/cygnus.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "cyg.esm.js",
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true,
    },
  },
  // CommonJS build
  {
    ...commonConfig,
    entry: "./src/cygnus.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "cyg.cjs.js",
      library: {
        type: "commonjs2",
      },
    },
  },
  // UMD build
  {
    ...commonConfig,
    entry: "./src/cygnus.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "cygnus.js",
      library: {
        name: "Cygnus",
        type: "umd",
        export: "MerchantSDK",
      },
      globalObject: "typeof self !== 'undefined' ? self : this",
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
      modules: ["node_modules", "src"],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  },
];
